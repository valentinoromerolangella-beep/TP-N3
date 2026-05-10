CREATE DATABASE IF NOT EXISTS gestion_gimnasio;


\c gestion_gimnasio


CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  nombre VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS suscripciones (
  id SERIAL PRIMARY KEY,
  id_usuario INT NOT NULL,
  plan VARCHAR(100),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


INSERT INTO usuarios (email, password, nombre) 
VALUES ('admin@gym.com', 'admin123', 'Administrador')
ON CONFLICT (email) DO NOTHING;
