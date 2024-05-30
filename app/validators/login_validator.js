const { body } = require('express-validator');

module.exports = [
	body('username').notEmpty().withMessage('Informe o seu nome ou apelido.'),
];