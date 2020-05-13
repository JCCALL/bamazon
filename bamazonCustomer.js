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

connection.connect();


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

console.log(table.toString()+ "\n");
purchase();
});

function purchase(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Item ID of the item you would like to purchase.",
            name: "itemID",
            filter: Number
        },
        {
            type: "input",
            message: "How many would you like to purchase?",
            name: "quantity",
            filter: Number
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        }

    ])
    .then(function(inquirerRes) {
        if (inquirerRes.confirm){
            var quantReq = inquirerRes.quantity;
            var idReq = inquirerRes.itemID;
            purchaseOrder(idReq, quantReq);
        } else{
            console.log("That is okay please come again")
            connection.end();
        }    
    });
};
function purchaseOrder(ID, amt){
    connection.query("Select * FROM products WHERE item_id = " + ID, function(err, res){
        if (err) { console.log(err);};
        if ( amt <= res[0].stock_quantity) {
            var cost = res[0].price * amt;
            console.log("Amount requested is available!");
            console.log("Your total cost for " + amt + " " + res[0].product_name + " is " + "$" + cost + " Thank you for your business.");

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amt + " WHERE item_id = " + ID);
        } else {
            console.log("I am sorry to inform you that we do not have enough " + res[0].product_name + " to complete your order.");
        };
        connection.end();
    });
    
}
