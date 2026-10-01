-- Sesion 11: base de datos para la API de usuarios
-- Ejecutar en MySQL Workbench (o en la terminal de MySQL)

CREATE DATABASE IF NOT EXISTS curso_web;

USE curso_web;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  edad INT NOT NULL
);

-- Usuarios de prueba (ejecutar despues de verificar que GET /usuarios sale vacio)
INSERT INTO usuarios (nombre, edad) VALUES ('Ana', 20);
INSERT INTO usuarios (nombre, edad) VALUES ('Luis', 25);
INSERT INTO usuarios (nombre, edad) VALUES ('Camila', 22);
