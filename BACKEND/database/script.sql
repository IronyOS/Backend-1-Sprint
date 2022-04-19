
DROP TABLE IF EXISTS marca;

CREATE TABLE marca(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    estado ENUM('Activo', 'Inactivo') NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    CONSTRAINT `pk_id_marca` PRIMARY KEY (id)
);

DROP TABLE IF EXISTS linea;

CREATE TABLE linea(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    estado ENUM('Activo', 'Inactivo') NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    id_marca INT(11),
    CONSTRAINT `pk_id_linea` PRIMARY KEY (id),
    CONSTRAINT `fk_id_marca` 
        FOREIGN KEY(id_marca) REFERENCES marca(id)
);

DROP TABLE IF EXISTS vehiculo;


CREATE TABLE vehiculo(
    placa INT(7) NOT NULL UNIQUE,
    modelo VARCHAR(10) NOT NULL,
    fecha_vencimiento_seguro  DATE NOT NULL,
    fecha_vencimiento_tecnomecanica DATE NOT NULL,
    id_linea INT(11),
    CONSTRAINT `pk_placa_vehiculo`PRIMARY KEY (placa),
    CONSTRAINT `fk_id_linea` 
        FOREIGN KEY(id_linea) REFERENCES linea(id)
);