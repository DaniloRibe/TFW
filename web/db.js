var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/livros');
	
var userSchema = mongoose.Schema({
    nomelivro: String,
    desclivro: String
}, { collection: 'livros' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }
