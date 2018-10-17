CREATE TABLE `Dhar`.`Users` (
  `idUsers` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `pass` VARCHAR(50) NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


CHANGE COLUMN `idUsers` `user_id` INT(11) NOT NULL ;
