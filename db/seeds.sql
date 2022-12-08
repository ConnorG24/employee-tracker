INSERT INTO department(names)
VALUES 
('DPS'),
('SUPPORT'),
('Healer');

INSERT INTO roles(title, salary, department_id)
VALUES
('Samurai', 60000,1),
('Monk',65000,1),
('White Mage', 75000,3),
('Sage',80000,3),
('Gunbreaker',70000,2),
('Paladin',72000,2);

INSERT INTO employee(first_name, last_name, role_id)
VALUES
('John','Smith',2),
('Joshua','Graham',1),
('Mike','Tyson',2),
('Spike','Spiegel',5),
('Steven','Seagul',1),
('John','Madden',3),
('Jill','Valentine',6),
('Claire','Redfield',4);

