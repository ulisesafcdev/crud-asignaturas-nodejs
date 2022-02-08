const connection = require('../connection/connection');
const materiasModel = require('../models/asignaturas.model');
const controller = {};

const createMateria = (materia, modulos, profesor) => {

    const materiaOne = new materiasModel({
        materia: materia,
        modulos: modulos,
        profesor: profesor
    })

    return materiaOne;

}

const editMateria = (id, materia, modulos, profesor) => {

    const datos = {
        materia,
        modulos,
        profesor
    }

    return materiasModel.updateOne({_id:id}, {
        $set:{
            materia: datos.materia,
            modulos: datos.modulos,
            profesor: datos.profesor
        }
    })

}

deleteMateria = (id) => {

    return materiasModel.deleteOne({_id:id});

}

controller.index = async (req, res) => {
    // res.send('Hello world from controller');
    
    try {
        
        await connection();
        // console.log('Conectado a la base de datos...');
        await createMateria('base de datos 1', '3', 'lic. Alvin Yakitori').save();
        // await editMateria('62018a3bc42fc07fc550ee86', 'base de datos', '6', 'Prof. Alvin Yakitori');
        // await deleteMateria('62018a3bc42fc07fc550ee86');
        const allData = await materiasModel.find();
        
        res.render('index', {
            allData
        });
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = controller;