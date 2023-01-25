create database checkout;
use checkout;

create table user(
  id int not null primary key auto_increment,
  uuid varchar(50) unique not null,
  name varchar(50) not null,
  email varchar(50) not null,
  password varchar(50) not null,
  address varchar(100) not null,
  phone varchar(50) not null,
  cardNumber varchar(50) not null,
  expiry date not null,
  cvv int not null,
  billzipcode int not null
);
