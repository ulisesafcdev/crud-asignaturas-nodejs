const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes/index.routes');
app.use(routes);

app.use(express.static(path.join(__dirname, '../public')));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones...');
})