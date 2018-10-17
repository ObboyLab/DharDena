CREATE TABLE `Dhar`.`Accounts` (
  `accounts_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `type` INT NOT NULL,
  PRIMARY KEY (`accounts_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `Dhar`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);