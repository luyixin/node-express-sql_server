var Controller = require('../app/controller/controller');

module.exports = function (app) {

	app.get('/', Controller.index);

	app.get('/xing/all', Controller.tem1);

	app.get('/xing/org', Controller.tem2);

	app.get('/xing/coo', Controller.tem3);

	app.get('/xing/spe', Controller.tem4);

	app.get('/server/inv', Controller.tem5);

	app.get('/server/cla', Controller.tem6);

	app.get('/server/acc', Controller.tem7);

	app.get('/server', Controller.tem8);

	app.get('/com/ind', Controller.tem9);

	app.get('/com/foc', Controller.tem10);

	app.get('/com/sta', Controller.tem11);

	app.get('/com', Controller.tem12);

	app.get('/team', Controller.tem13);

	app.get('/culture', Controller.tem14);

	app.get('/copyright', Controller.tem15);

	app.get('/contact/person', Controller.tem16);

	app.get('/contact/suggest', Controller.tem17);

	app.get('/contact/mode', Controller.tem18);

	app.get('/contact/map', Controller.tem19);

	app.post('/suggest/new', Controller.tem20);

	app.get('/map', Controller.tem21);
}