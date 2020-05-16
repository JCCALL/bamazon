CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Optimus X", "Electronics", 199.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Batman's Utility Belt", "Electronics", 159.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Rubby Slippers", "Footwear", 100.99, 2);	
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Battle Mech", "Mechanic", 500.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Lightcycle", "Automotive", 10000.99, 5);			
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Spinner", "Automotive", 15000.99, 10);	
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Holy Hand Gernade of Antioch", "Armory", 100.99, 5);	
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Lightsaber", "Armory", 200.99, 7);	
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Proton Pack", "Ghostbusting", 300.99, 5);	
INSERT INTO products (product_name, department_name, price, stock_quanitity) 
	VALUE ("Iron Man Suit", "Defense", 700.99, 42);	
		
SELECT*FROM products;	

