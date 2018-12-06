const express = require('express');
const router = express.Router();

// Contact Model
const Contact = require('../../models/Contact');

router.get('/', function(req, res) {
	res.render('index');
});


// contact us
router.post('/', (req, res) => {
	//res.render('index');
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;

	const newContact = new Contact({
		name: name,
		email: email,
		message: message,
	});

	newContact.save().then(contact => res.json(contact));
});

module.exports = router;
