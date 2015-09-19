-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Erstellungszeit: 19. Sep 2015 um 14:20
-- Server Version: 5.5.43-cll-lve
-- PHP-Version: 5.5.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `hackathon`
--
CREATE DATABASE IF NOT EXISTS `hackathon` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hackathon`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `History`
--

CREATE TABLE IF NOT EXISTS `History` (
`ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Service_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Quest`
--

CREATE TABLE IF NOT EXISTS `Quest` (
`ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `maxLevel` int(11) DEFAULT NULL,
  `startPoints` int(11) DEFAULT NULL,
  `factor` double DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `isMasterRequest` tinyint(4) NOT NULL DEFAULT '0',
  `Service_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Reward`
--

CREATE TABLE IF NOT EXISTS `Reward` (
`ID` int(11) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `description` text,
  `achievementImage` varchar(50) DEFAULT NULL,
  `Quest_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Service`
--

CREATE TABLE IF NOT EXISTS `Service` (
`ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `User`
--

CREATE TABLE IF NOT EXISTS `User` (
`ID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `User_Quest`
--

CREATE TABLE IF NOT EXISTS `User_Quest` (
`ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Quest_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `History`
--
ALTER TABLE `History`
 ADD PRIMARY KEY (`ID`), ADD KEY `User_ID` (`User_ID`,`Service_ID`), ADD KEY `Service_ID` (`Service_ID`);

--
-- Indexes for table `Quest`
--
ALTER TABLE `Quest`
 ADD PRIMARY KEY (`ID`), ADD KEY `Service_ID` (`Service_ID`);

--
-- Indexes for table `Reward`
--
ALTER TABLE `Reward`
 ADD PRIMARY KEY (`ID`), ADD KEY `Quest_ID` (`Quest_ID`);

--
-- Indexes for table `Service`
--
ALTER TABLE `Service`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `User_Quest`
--
ALTER TABLE `User_Quest`
 ADD PRIMARY KEY (`ID`), ADD KEY `User_ID` (`User_ID`,`Quest_ID`), ADD KEY `Quest_ID` (`Quest_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `History`
--
ALTER TABLE `History`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Quest`
--
ALTER TABLE `Quest`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Reward`
--
ALTER TABLE `Reward`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Service`
--
ALTER TABLE `Service`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `User_Quest`
--
ALTER TABLE `User_Quest`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `History`
--
ALTER TABLE `History`
ADD CONSTRAINT `History_ibfk_2` FOREIGN KEY (`Service_ID`) REFERENCES `Service` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `History_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `Reward`
--
ALTER TABLE `Reward`
ADD CONSTRAINT `Reward_ibfk_1` FOREIGN KEY (`Quest_ID`) REFERENCES `Quest` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `User_Quest`
--
ALTER TABLE `User_Quest`
ADD CONSTRAINT `User_Quest_ibfk_2` FOREIGN KEY (`Quest_ID`) REFERENCES `Quest` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `User_Quest_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
