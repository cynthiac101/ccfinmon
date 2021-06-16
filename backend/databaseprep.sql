-- show all tables
show tables; 

-- how to create child table with properties and datatype. please set primary key, so that you do not result in duplicates.
create table child (
    id int,
    parent_name varchar (100),
    child_name varchar (100),
    username varchar(100),
    password varchar(100),
    balance decimal (6,2)
    primary key(id)
);

-- how to load info from mock excel into relevant child table
LOAD DATA LOCAL INFILE '/Users/Surface/Downloads/child.csv'
INTO TABLE child
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS (id, parent_name, child_name, username, password, balance)

LOAD DATA LOCAL INFILE '/Users/Surface/Downloads/wishlist.csv'
INTO TABLE wishlist
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS (id, child_id, type, category, item_name, price, goal)

-- how to view all data in child table
select * from child;
select * from wishlist;

-- how to check datatypes in child table
desc child;