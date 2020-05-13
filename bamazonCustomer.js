var mysql = require("mysql");
var inquirer = require("inquirer");
var sqlpass = require("./key");
var Table = require('cli-table3');

var connection = mysql.createConnection({
    host: "localhost",
	port: 8889,
    user: "root",
	password: sqlpass.password.pass,
	database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    
})

function showItems(){
    var query = connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        console.log("ID " + " PRODUCT " + " DEPARTMENT " + " PRICE " + " STOCK " + "\n" +
                    "------------------------------------------------")
        for (var i = 0; i < res.length; i++){
        console.log(res[i].item_id + " " + res[i].product_name  + " " + res[i].department_name  + " " + res[i].price  + " " + res[i].stock_quanitity);
        };
        connection.end();
    })
};

function createTable(){
    connection.query('SELECT item_id, product_name, price FROM products', function(err, res){
        if(err) console.log(err);

    var table = new Table({
        head: ['Item ID', 'Product', 'Price']

    });
    for(var i = 0; i < res.length; i++) {
        table.push(
            [res[i].item_id, res[i].product_name, res[i].price]
        );
    }
    });
    console.log(table.toString());
    connection.end();
};


connection.query('SELECT item_id, product_name, price FROM products', function(err, res){
    if(err) console.log(err); 
//instantiate
var table = new Table({
    head: ['Item ID', 'Product', 'Price']
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
for(var i = 0; i < res.length; i++) {
    table.push(
        [res[i].item_id, res[i].product_name, res[i].price]
    );
    }

console.log(table.toString());
connection.end();
});