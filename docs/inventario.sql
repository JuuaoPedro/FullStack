-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca CHARSET=UTF8 COLLATE utf8_general_ci;
USE biblioteca;
-- DDL Criação da estrutura da tabela
CREATE TABLE livro(
    nome varchar(50) not null primary key,
    autor varchar(50) not null,
    valor decimal(10,2) not null
);

