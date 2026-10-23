-- Base de datos para la API de usuarios en Supabase (PostgreSQL)
-- Ejecutar en Supabase: menu "SQL Editor" > "New query" > pegar y "Run"

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  edad INT NOT NULL CHECK (edad >= 0)
);

-- Usuarios de prueba
INSERT INTO usuarios (nombre, edad) VALUES ('Ana', 20);
INSERT INTO usuarios (nombre, edad) VALUES ('Luis', 25);
INSERT INTO usuarios (nombre, edad) VALUES ('Camila', 22);
