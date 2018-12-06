const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ContactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
