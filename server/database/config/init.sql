BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    location VARCHAR(100)
);

INSERT INTO users(name, location) VALUES('abd', 'IDK'),  ('ali', 'gaza');

COMMIT;