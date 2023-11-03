create database shoppinglist;

use shoppinglist;

create table item (
    id int PRIMARY key auto_increment,
    description VARCHAR(255) not null,
    amount SMALLINT UNSIGNED not NULL
);

INSERT into item (description, amount) values ('Test item'1);