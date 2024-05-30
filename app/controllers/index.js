module.exports.index = (app, req, res) => {
	res.render('index', {
		errors: req.session.errors,
		body: req.session.body
	});

	req.session.destroy();
}