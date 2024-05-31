const { validationResult } = require('express-validator');

module.exports.initChat = (app, req, res) => {
	res.render('chat', {
		username: req.session.username
	});
}

module.exports.setUsername = (app, req, res) => {
	const validate = validationResult(req);
	const data = req.body;

	if(!validate.isEmpty()) {
		req.session.errors = validate.array();
		req.session.body = data;
		res.redirect('/');
		return;
	}

	app.get('io').emit('chatToClient', {
		username: data.username,
		message: `Usuário ${data.username} entrou no chat`
	});

	req.session.username = data.username;
	res.redirect('/chat');
}