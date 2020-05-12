var mysql = require("mysql");
var inquirer = require("inquirer");
var sqlpass = require("./key");

var connection = mysql.createConnection({
    host: "localhost",
	port: 8889,
    user: "root",
	password: sqlpass.password.pass,
	database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    showItems();
})

function showItems(){
    var query = connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        console.log(res);
        connection.end();
    })
};