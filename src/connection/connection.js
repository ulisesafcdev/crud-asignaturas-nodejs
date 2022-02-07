const mongoose = require('mongoose');

const password = 'ulisesafcdev';
const dbname = 'asignaturas';
const uri = `mongodb+srv://ulisesafcdev:${password}@cluster0.o0zu7.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(uri);
}