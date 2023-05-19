CREATE DATABASE IF NOT EXISTS harry_potter;

USE harry_potter;

-- Criação da tabela
CREATE TABLE wizards (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    house VARCHAR(255),
    ancestry VARCHAR(255),
    patronus VARCHAR(255)
);

-- Inserção dos dados
INSERT INTO wizards (id, name, house, ancestry, patronus)
VALUES
    (1, 'Harry Potter', 'Gryffindor', 'half-blood', 'stag'),
    (2, 'Hermione Granger', 'Gryffindor', 'muggleborn', 'otter'),
    (3, 'Ron Weasley', 'Gryffindor', 'pure-blood', 'Jack Russell terrier'),
    (4, 'Albus Dumbledore', 'Gryffindor', 'half-blood', 'Phoenix'),
    (5, 'Draco Malfoy', 'Slytherin', 'pure-blood', ''),
    (6, 'Lord Voldemort', 'Slytherin', 'half-blood', '');

-- Verificar se os dados foram inseridos corretamente
SELECT * FROM wizards;