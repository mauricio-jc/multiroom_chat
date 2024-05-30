const { validationResult } = require('express-validator');

module.exports.initChat = (app, req, res) => {
	res.render('chat');
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

	res.redirect('/chat');
}