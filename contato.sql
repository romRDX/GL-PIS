-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 09-Out-2019 às 19:19
-- Versão do servidor: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `latas`;
CREATE TABLE IF NOT EXISTS `latas` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fabricante` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(13) COLLATE utf8_unicode_ci NOT NULL,
  `pais` varchar(105) COLLATE utf8_unicode_ci NOT NULL,
  `mililitros` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `compradoEm` DATE COLLATE utf8_unicode_ci NOT NULL,
  `valor` INT COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `latas` (`id`, `nome`, `fabricante`, `tipo`, `pais`, `mililitros`, `compradoEm`, `valor`) VALUES
(1, 'Nova Skin', 'Skin Cariol', 'Cerveja', 'Brasil', '200ml', '2017-06-15', '7,00'),
(2, 'Pepsi', 'Grupo peps', 'Refrigerante', 'Brasil', '500ml', '2018-08-05', '5,00'),
(3, 'Gatorade', 'Gators', 'Energético', 'Brasil', '300ml', '2015-11-09', '7,00'),
(4, 'Mate Leão', 'Chá Brasil', 'Chá', 'Brasil', '150ml', '2019-01-27', '3,00'),
(5, '51', 'Cachaça Brasil', 'Outro', 'Brasil', '50ml', '2016-03-13', '2,00');