-- Criação do banco de dados do projeto individual "f1"
create database f1;
use f1;

-- Criação das tabelas relacionadas ao escopo do meu projeto individual "TRZ Wheels"
create table marca(
id int primary key auto_increment,
nome varchar(40) not null
);

create table usuario(
id int primary key auto_increment,
nome varchar(70) not null,
email varchar(120) not null unique,
senha varchar(50) not null,
dt_cadastro datetime default current_timestamp,
fk_marca_favorita int,

foreign key (fk_marca_favorita) references marca(id)
);

create table quiz(
id int primary key auto_increment,
titulo varchar(100) not null,
descricao varchar(200) not null,
criacao datetime default current_timestamp
);

create table questao(
id int auto_increment,
id_quiz int not null,
pergunta varchar(100) not null,
resposta varchar(100) not null,

primary key(id,id_quiz),
foreign key (id_quiz) references quiz(id)
);

create table usuario_quiz_resultado(
id int auto_increment,
id_usuario int not null,
id_quiz int not null,
pontuacao decimal(4,2) not null,
respostas_corretas int not null,
respostas_erradas int not null,
finalizacao datetime default current_timestamp,

primary key (id,id_usuario,id_quiz),
foreign key (id_usuario) references usuario(id),
foreign key (id_quiz) references quiz(id)
);

alter table marca modify column nome varchar(40) not null unique;
desc marca;
-- inserts
insert into marca(nome) values
('Ferrari'),
('Mclaren'),
('Mercedes-Benz'),
('Haas'),
('Kick Sauber'),
('Red Bull'),
('Aston Martin'),
('Willians'),
('Racing Bull'),
('Alpine');

select * from marca;
