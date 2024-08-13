CREATE DATABASE lepetitnuage;
use lepetitnuage;
-- Table pour les services offerts par la société
CREATE TABLE Services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les formations
CREATE TABLE Formations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL DEFAULT 'Nounou',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des formations par défaut
INSERT INTO Formations (name, description) VALUES ('Nounou', 'Formation pour devenir nounou qualifié');
INSERT INTO Formations (name, description) VALUES ('Français', 'Cours de langue française');

-- Table pour les enfants inscrits dans la garderie
CREATE TABLE Enfants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    date_naissance DATE NOT NULL,
    parent_contact VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les tuteurs (précepteurs)
CREATE TABLE Tuteurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    specialite VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour l'inscription des enfants à une formation
CREATE TABLE InscriptionFormations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    enfant_id INT,
    formation_id INT,
    date_inscription DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (enfant_id) REFERENCES Enfants(id),
    FOREIGN KEY (formation_id) REFERENCES Formations(id)
);

-- Table pour l'inscription des enfants à la garderie
CREATE TABLE Garderie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    enfant_id INT,
    date_inscription DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (enfant_id) REFERENCES Enfants(id)
);
