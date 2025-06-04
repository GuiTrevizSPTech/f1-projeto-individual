-- Criação do banco de dados do projeto individual "f1"
create database f1;
use f1;

-- Criação das tabelas relacionadas ao escopo do meu projeto individual "TRZ Wheels"
create table marca(
id int primary key auto_increment,
nome varchar(40) not null unique
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
titulo varchar(100) not null
);

create table pergunta(
id int auto_increment primary key,
id_quiz int not null,
enunciado varchar(120) not null,


foreign key (id_quiz) references quiz(id)
);

create table alternativa(
id int auto_increment primary key,
texto varchar(120) not null,
correto boolean not null,
fk_pergunta int,

foreign key (fk_pergunta) references pergunta(id)
);

create table resultado_quiz(
id int auto_increment primary key,
id_usuario int not null,
id_quiz int not null,
acertos int,
total int not null,
porcentagem decimal(5,2) not null,
finalizacao datetime default now(),

foreign key (id_usuario) references usuario(id),
foreign key (id_quiz) references quiz(id)
);

-- populando a tabela marca
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

-- Populando a tabela quiz
INSERT INTO quiz (titulo) VALUES 
('Evolução dos Carros'),
('Curiosidades dos Carros'),
('Carros Icônicos');

-- Pergunta 1
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'Em qual década os carros de F1 começaram a usar asas aerodinâmicas?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(1, '1950', false),
(1, '1960', true),
(1, '1970', false),
(1, '1980', false);

-- Pergunta 2
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'Quando os carros começaram a utilizar o efeito solo (ground effect)?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(2, '1970', true),
(2, '1980', false),
(2, '1990', false),
(2, '2000', false);

-- Pergunta 3
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'Em que ano o sistema DRS (asa móvel) foi introduzido na F1?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(3, '2009', false),
(3, '2010', false),
(3, '2011', true),
(3, '2012', false);

-- Pergunta 4
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'Qual componente foi introduzido nos anos 2000 para melhorar a segurança lateral dos carros?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(4, 'Halo', false),
(4, 'Zona de escape', false),
(4, 'Cockpit fechado', false),
(4, 'Estrutura anti-intrusão', true);

-- Pergunta 5
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'Qual foi a principal mudança nos motores a partir de 2014?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(5, 'Passaram a usar etanol', false),
(5, 'Tornaram-se híbridos', true),
(5, 'Passaram para dois cilindros', false),
(5, 'Foram retiradas as turbos', false);

-- Pergunta 6
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'Quando os carros deixaram de ter câmbio manual com embreagem no pé?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(6, 'Anos 70', false),
(6, 'Anos 80', false),
(6, 'Anos 90', true),
(6, 'Anos 2000', false);

-- Pergunta 7
INSERT INTO pergunta (id_quiz, enunciado) VALUES (1, 'O dispositivo ''Halo'' foi introduzido em qual temporada?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(7, '2016', false),
(7, '2017', false),
(7, '2018', true),
(7, '2019', false);


-- Pergunta 1
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Qual é a velocidade máxima já registrada por um carro de F1 em corrida?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(8, '372 km/h', true),
(8, '350 km/h', false),
(8, '410 km/h', false),
(8, '330 km/h', false);

-- Pergunta 2
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Qual carro da F1 tinha seis rodas?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(9, 'Ferrari 312T', false),
(9, 'Williams FW14', false),
(9, 'Tyrrell P34', true),
(9, 'Lotus 79', false);

-- Pergunta 3
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Quantos litros de combustível os carros de F1 podem carregar atualmente por corrida?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(10, '100 L', false),
(10, '110 L', true),
(10, '150 L', false),
(10, '80 L', false);

-- Pergunta 4
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Qual componente revolucionário a Ferrari introduziu nos anos 70?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(11, 'Volante removível', false),
(11, 'Radiador frontal', false),
(11, 'Caixa de câmbio semiautomática', true),
(11, 'Turbo compressor', false);

-- Pergunta 5
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Qual equipe projetou um carro com ventiladores para gerar pressão aerodinâmica?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(12, 'Lotus', false),
(12, 'Ferrari', false),
(12, 'McLaren', false),
(12, 'Brabham', true);

-- Pergunta 6
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Qual desses materiais é mais usado na construção do chassi de um carro de F1 moderno?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(13, 'Alumínio', false),
(13, 'Fibra de carbono', true),
(13, 'Aço', false),
(13, 'Titânio', false);

-- Pergunta 7
INSERT INTO pergunta (id_quiz, enunciado) VALUES (2, 'Quantas marchas têm os carros de F1 atualmente (desde 2014)?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(14, '6', false),
(14, '7', false),
(14, '8', true),
(14, '9', false);


-- Pergunta 1
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'Qual carro foi usado por Ayrton Senna para conquistar seu primeiro título mundial, em 1988?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(15, 'Lotus 97T', false),
(15, 'McLaren MP4/4', true),
(15, 'Williams FW16', false),
(15, 'Ferrari F1-90', false);

-- Pergunta 2
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'Qual equipe produziu o icônico modelo F2004, amplamente vitorioso com Schumacher?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(16, 'McLaren', false),
(16, 'Williams', false),
(16, 'Ferrari', true),
(16, 'Renault', false);

-- Pergunta 3
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'O modelo RB9, usado por Sebastian Vettel em 2013, era de qual equipe?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(17, 'Ferrari', false),
(17, 'McLaren', false),
(17, 'Red Bull', true),
(17, 'Mercedes', false);

-- Pergunta 4
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'Qual desses carros é da equipe Mercedes-AMG Petronas?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(18, 'W11', true),
(18, 'MP4-23', false),
(18, 'SF90', false),
(18, 'FW36', false);

-- Pergunta 5
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'O carro da Brawn GP que venceu o campeonato de 2009 se chamava:');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(19, 'BG-09', false),
(19, 'BGP 001', true),
(19, 'RB5', false),
(19, 'FW31', false);

-- Pergunta 6
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'Qual carro da Renault ficou famoso por sua pintura azul e amarela e vitórias com Alonso?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(20, 'R25', true),
(20, 'R29', false),
(20, 'R21', false),
(20, 'R31', false);

-- Pergunta 7
INSERT INTO pergunta (id_quiz, enunciado) VALUES (3, 'Qual carro ficou marcado por usar a tecnologia de "suspensão ativa" nos anos 90?');
INSERT INTO alternativa (fk_pergunta, texto, correto) VALUES
(21, 'Ferrari F92A', false),
(21, 'McLaren MP4/13', false),
(21, 'Williams FW14B', true),
(21, 'Lotus 99T', false);

