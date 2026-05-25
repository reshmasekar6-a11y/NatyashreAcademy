CREATE DATABASE IF NOT EXISTS natyasree_academy
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE natyasree_academy;

CREATE TABLE IF NOT EXISTS programs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  category VARCHAR(80) NOT NULL,
  description TEXT NOT NULL,
  highlights JSON NOT NULL,
  image_url VARCHAR(600) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(140) NOT NULL,
  city VARCHAR(120) NOT NULL,
  mode ENUM('Offline', 'Online', 'Hybrid') NOT NULL DEFAULT 'Offline',
  description VARCHAR(255) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(140) NOT NULL,
  specialty VARCHAR(160) NOT NULL,
  bio TEXT NOT NULL,
  image_url VARCHAR(600),
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS affiliation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  institution VARCHAR(180) NOT NULL,
  country VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  exam_levels VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  author VARCHAR(140) NOT NULL,
  role VARCHAR(140) NOT NULL,
  quote TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(140) NOT NULL,
  parent_name VARCHAR(140),
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(40),
  program_interest VARCHAR(140) NOT NULL,
  preferred_location VARCHAR(140) NOT NULL,
  learning_mode ENUM('Online', 'Offline', 'Hybrid') NOT NULL,
  message TEXT,
  status ENUM('New', 'Contacted', 'Enrolled', 'Closed') NOT NULL DEFAULT 'New',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
