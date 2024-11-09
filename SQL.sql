CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100));
INSERT INTO users (name, email) VALUES ('Sample User', 'user@example.com');
SELECT * FROM users;
--  CQ: A primary key uniquely identifies rows, preventing duplicate entries and enabling efficient indexing.
-- Sections  6 and 7 is Something I am not fully Familiar with but I am willing to learn it both with you and on my own. 
