module.exports = (app) => {
	app.get('/chat', (req, res) => {
		app.app.controllers.chat.initChat(app, req, res);
	});

	app.post('/chat', (req, res) => {
		//res.render('chat');
	});
}