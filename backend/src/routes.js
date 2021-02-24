const express = require('express');
const TimeController = require('./controllers/TimeController');
const TabelaController = require('./controllers/TabelaController');
const TabelaTimeController = require('./controllers/TabelaTimeController');
const routes = express.Router();

routes.get('/time', TimeController.show);
routes.post('/time', TimeController.create);

routes.get('/tabela', TabelaController.show);
routes.post('/tabela', TabelaController.create);

routes.get('/tabelaTime', TabelaTimeController.show);
routes.post('/tabelaTime', TabelaTimeController.create);
routes.put('/tabelaTime/:tabela_time_id', TabelaTimeController.update);


module.exports = routes;
