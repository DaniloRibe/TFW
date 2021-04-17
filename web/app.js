const express = require("express");
const handlebars = require("express-handlebars");
const bodyparser = require('body-parser');
const app = express();

const path = require('path');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.engine('handlebars', handlebars({defaultLayout: "main"}));
app.set('view engine', 'handlebars')

app.get("/", function(req, res){
   
    res.send("Olá Mundo!");
});
app.get("/index", function(req, res){
   
    res.render("index", {
        isListEnabled: true
    });
});

app.post("/adduser", function(req, res){
    var db = require("./db");
    var nomeLivro = req.body.nome;
    var descLivro = req.body.desc;
    console.log(nomeLivro);
    var Users = db.Mongoose.model('livros', db.UserSchema, 'livros');
    var user = new Users({ nomelivro: nomeLivro, desclivro: descLivro });
    user.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect("index");
        }
    });
});

app.get("/users", function(req, res) {
	var db = require("./db");
   	var Users = db.Mongoose.model('livros', db.UserSchema, 'livros');
   	Users.find({}).lean().exec(
      		function (e, docs) {
         		res.render('users', { "users": docs });
   });
});

//localhost:8087
app.listen(8087);
console.log("Servidor executando na porta 8087")

