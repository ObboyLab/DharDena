CREATE TABLE `Dhar`.`Profiles` (
  `profile_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `middile_name` VARCHAR(45) NULL,
  `dob` DATETIME NOT NULL,
  `street_address` VARCHAR(45) NOT NULL,
  `tfn` VARCHAR(45) NULL,
  `city_id` INT NOT NULL,
  `post_code` INT NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`profile_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `Dhar`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
