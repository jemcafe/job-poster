DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    avatar VARCHAR
);

SELECT * FROM Users;

-- SELECT table_name 
-- FROM information_schema.tables 
-- WHERE table_schema = 'public';
