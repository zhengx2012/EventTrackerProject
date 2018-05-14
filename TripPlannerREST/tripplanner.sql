-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema tripplannerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tripplannerdb` ;

-- -----------------------------------------------------
-- Schema tripplannerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tripplannerdb` DEFAULT CHARACTER SET utf8 ;
USE `tripplannerdb` ;

-- -----------------------------------------------------
-- Table `planner`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `planner` ;

CREATE TABLE IF NOT EXISTS `planner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `flight_time` TIMESTAMP NULL,
  `flight_number` VARCHAR(45) NULL,
  `flight_company` VARCHAR(45) NULL,
  `trip_expenses` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO planner@localhost;
 DROP USER planner@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'planner'@'localhost' IDENTIFIED BY 'goodjob';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'planner'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `planner`
-- -----------------------------------------------------
START TRANSACTION;
USE `tripplannerdb`;
INSERT INTO `planner` (`id`, `city`, `state`, `country`, `date`, `flight_time`, `flight_number`, `flight_company`, `trip_expenses`) VALUES (1, 'Denver', 'Colorado', 'United States of America', '2018-05-10', '2018-05-10 07:00:00', 'G7457', 'Delta', 500.00);
INSERT INTO `planner` (`id`, `city`, `state`, `country`, `date`, `flight_time`, `flight_number`, `flight_company`, `trip_expenses`) VALUES (2, 'West Palm Beach', 'Florida', 'United States', '2018-05-30', '2018-05-30 13:30:00', 'R4579', 'United', 300.00);

COMMIT;

