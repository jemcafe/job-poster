INSERT INTO Users
(username, password, email, first_name, last_name, avatar)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;