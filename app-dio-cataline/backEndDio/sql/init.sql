CREATE EXTENSION IF NOT EXIXTS "uuid_ossp"
CREATE EXTENSION IF NOT EXISTS "pgcrypto"


CREATE TABLE IF NOT EXISTS application_users(
  uuid uuid DEFAULT gen_random_uuid (),
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  PRIMARY KEY (uuid)
)

/* Buscando todos os registros */
SELECT uuid, username, email
  FROM application_users

/* Buscando apenas um registro pelo id */
SELECT uuid, username, email
FROM application_users
WHERE uuid = $1

/* Inserindo um registro */
INSERT INTO application_users (
  username, 
  email, 
  password
  ) 
  VALUES (
    'admin', 
    'admin@gmail.com', 
    '123456'
  )

/* Atualizando um registro pelo ID */
UPDATE application_users 
SET 
  userName = $1, 
  email = $2, 
  password = $3,
WHERE uuid = $4

/* Deletando um registro pelo ID */
DELETE FROM application_users
  WHERE uuid = $1