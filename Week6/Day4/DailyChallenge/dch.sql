CREATE TABLE product_orders (
	order_id SERIAL PRIMARY KEY,
	customer VARCHAR (50)
)

CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	order_fk INTEGER REFERENCES product_orders (order_id) ON UPDATE CASCADE ON DELETE SET NULL,
	item VARCHAR (30),
	price SMALLINT
)


INSERT INTO product_orders (customer)
VALUES 
('Bob'),
('Mark'),
('Bob')

INSERT INTO items (order_fk, item, price)
VALUES 
(1, 'Bike', 1500),
(NULL, 'Panama', 50),
(1, 'Car', 10000),
(2, 'Table', 1000)

CREATE FUNCTION calc_order (order_id INTEGER) RETURNS INTEGER AS $total$
BEGIN 
	RETURN (SELECT SUM(price) FROM items WHERE order_fk = order_id);
END;
$total$ LANGUAGE plpgsql;

SELECT * FROM calc_order (1);
