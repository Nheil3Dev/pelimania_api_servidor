-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2023 a las 09:56:33
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pelimania`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id` int(5) NOT NULL,
  `comentario` varchar(400) NOT NULL,
  `estrellas` int(1) NOT NULL DEFAULT 0,
  `fecha` varchar(40) NOT NULL DEFAULT current_timestamp(),
  `spoiler` tinyint(1) NOT NULL DEFAULT 0,
  `usuario` varchar(20) NOT NULL,
  `idPelicula` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id`, `comentario`, `estrellas`, `fecha`, `spoiler`, `usuario`, `idPelicula`) VALUES
(25, 'La mejor de la saga para mi gusto', 5, '2023-04-25 17:36:13', 0, 'claudio', 'tt0241527'),
(26, 'Me encanta esta peli', 4, '2023-04-25 17:37:02', 0, 'claudio', 'tt0266697'),
(27, 'Esta película me trae muchísimos recuerdos', 3, '2023-04-25 17:38:16', 0, 'claudio', 'tt0117008'),
(28, 'Es una película super divertida', 4, '2023-04-25 17:40:02', 0, 'valeria', 'tt11832046'),
(30, 'Odio cuando los malos persiguen a Sonic', 3, '2023-04-25 17:42:09', 1, 'valeria', 'tt3794354'),
(31, 'Mario nunca defrauda', 4, '2023-04-25 17:42:30', 0, 'valeria', 'tt6718170'),
(32, 'Muy recomendable si queda alguien que no la haya visto', 4, '2023-04-25 17:43:30', 0, 'valeria', 'tt0241527'),
(33, 'Peliculón!!', 4, '2023-04-25 17:54:13', 0, 'claudio', 'tt7286456'),
(34, 'spoiler alert!', 3, '2023-04-26 18:53:50', 1, 'claudio', 'tt0241527'),
(36, 'Que penaaa!', 4, '2023-04-29 20:44:35', 0, 'lucia', 'tt0120338'),
(37, 'Me encanta esta película', 5, '2023-04-29 20:46:25', 0, 'lucia', 'tt0203009');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `id` varchar(11) NOT NULL,
  `titulo` varchar(64) NOT NULL,
  `año` varchar(4) NOT NULL,
  `foto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pelicula`
--

INSERT INTO `pelicula` (`id`, `titulo`, `año`, `foto`) VALUES
('tt0075314', 'Taxi Driver', '1976', 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'),
('tt0098635', 'When Harry Met Sally...', '1989', 'https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg'),
('tt0117008', 'Matilda', '1996', 'https://m.media-amazon.com/images/M/MV5BMWE2YTBhYzItZDAxZS00Mjc3LWIxNmYtMzljZjIxMGE1NmY2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'),
('tt0120338', 'Titanic', '1997', 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'),
('tt0120737', 'The Lord of the Rings: The Fellowship of the Ring', '2001', 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'),
('tt0137523', 'Fight Club', '1999', 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'),
('tt0203009', 'Moulin Rouge!', '2001', 'https://m.media-amazon.com/images/M/MV5BMWFhYjliNjYtYjNhNS00OGExLWFhMjQtNDgwOWYyNWJiYzhmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'),
('tt0241527', 'Harry Potter and the Sorcerer\'s Stone', '2001', 'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'),
('tt0266697', 'Kill Bill: Vol. 1', '2003', 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'),
('tt0295297', 'Harry Potter and the Chamber of Secrets', '2002', 'https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg'),
('tt0304141', 'Harry Potter and the Prisoner of Azkaban', '2004', 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg'),
('tt0330373', 'Harry Potter and the Goblet of Fire', '2005', 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg'),
('tt0372784', 'Batman Begins', '2005', 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'),
('tt0373889', 'Harry Potter and the Order of the Phoenix', '2007', 'https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'),
('tt0399201', 'The Island', '2005', 'https://m.media-amazon.com/images/M/MV5BMTAwNjk0NjM1ODReQTJeQWpwZ15BbWU3MDc1NjIxMzM@._V1_SX300.jpg'),
('tt0417741', 'Harry Potter and the Half-Blood Prince', '2009', 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg'),
('tt0837562', 'Hotel Transylvania', '2012', 'https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_SX300.jpg'),
('tt0903624', 'The Hobbit: An Unexpected Journey', '2012', 'https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg'),
('tt0926084', 'Harry Potter and the Deathly Hallows: Part 1', '2010', 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg'),
('tt11832046', 'PAW Patrol: The Movie', '2021', 'https://m.media-amazon.com/images/M/MV5BOTFkN2JhOGEtODQzOC00NzA2LThkNzktYjhkMWIyNjM5YjNlXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg'),
('tt1201607', 'Harry Potter and the Deathly Hallows: Part 2', '2011', 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'),
('tt16116174', 'Harry Potter 20th Anniversary: Return to Hogwarts', '2022', 'https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg'),
('tt1756545', 'Harry Potter and the Forbidden Journey', '2010', 'https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg'),
('tt2293640', 'Minions', '2015', 'https://m.media-amazon.com/images/M/MV5BMTUwNjcxNzAwOF5BMl5BanBnXkFtZTgwNzEzMzIzNDE@._V1_SX300.jpg'),
('tt2488496', 'Star Wars: Episode VII - The Force Awakens', '2015', 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'),
('tt3794354', 'Sonic the Hedgehog', '2020', 'https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg'),
('tt6718170', 'The Super Mario Bros. Movie', '2023', 'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg'),
('tt7286456', 'Joker', '2019', 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(20) NOT NULL,
  `contraseña` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario`, `contraseña`) VALUES
('admin', 'admin'),
('claudio', '1234'),
('lucia', '1234'),
('valeria', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_pelicula`
--

CREATE TABLE `usuario_pelicula` (
  `usuario` varchar(20) NOT NULL,
  `idPelicula` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_pelicula`
--

INSERT INTO `usuario_pelicula` (`usuario`, `idPelicula`) VALUES
('claudio', 'tt0075314'),
('claudio', 'tt0117008'),
('claudio', 'tt0120737'),
('claudio', 'tt0137523'),
('claudio', 'tt0241527'),
('claudio', 'tt0266697'),
('claudio', 'tt0372784'),
('claudio', 'tt0903624'),
('claudio', 'tt2488496'),
('claudio', 'tt7286456'),
('lucia', 'tt0120338'),
('lucia', 'tt0203009'),
('lucia', 'tt0399201'),
('valeria', 'tt0241527'),
('valeria', 'tt0837562'),
('valeria', 'tt11832046'),
('valeria', 'tt2293640'),
('valeria', 'tt3794354'),
('valeria', 'tt6718170');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario` (`usuario`),
  ADD KEY `idPelicula` (`idPelicula`);

--
-- Indices de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);

--
-- Indices de la tabla `usuario_pelicula`
--
ALTER TABLE `usuario_pelicula`
  ADD PRIMARY KEY (`usuario`,`idPelicula`),
  ADD KEY `usuario` (`usuario`,`idPelicula`),
  ADD KEY `idPelicula` (`idPelicula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`idPelicula`) REFERENCES `pelicula` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_pelicula`
--
ALTER TABLE `usuario_pelicula`
  ADD CONSTRAINT `usuario_pelicula_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_pelicula_ibfk_2` FOREIGN KEY (`idPelicula`) REFERENCES `pelicula` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
