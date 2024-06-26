CREATE DATABASE IF NOT EXISTS `lobosvspueblo`;

USE lobosvspueblo;

-- USERS TABLE
CREATE TABLE IF NOT EXISTS `users`
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(500) NOT NULL UNIQUE,
    password VARCHAR(500) NOT NULL
);

-- MESSAGES TABLE
CREATE TABLE IF NOT EXISTS `messages`
(
    id CHAR(36) DEFAULT(UUID()) PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    content VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
    FOREIGN KEY (author) REFERENCES users(username)
);