const loginValidator = require('../validators/login_validator');

module.exports = (app) => {
	app.get('/chat', (req, res) => {
		app.app.controllers.chat.initChat(app, req, res);
	});

	app.post('/chat', loginValidator, (req, res) => {
		app.app.controllers.chat.setUsername(app, req, res);
	});
}