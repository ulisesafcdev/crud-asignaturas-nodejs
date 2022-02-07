const mongoose = require('mongoose');
const { Schema } = mongoose;

const MateriasSchema = new Schema({
    materia: String,
    modulos: String,
    profesor: String
})

const materiasModel = mongoose.model('materias', MateriasSchema);

module.exports = materiasModel;