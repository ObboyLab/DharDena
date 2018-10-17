 CREATE TABLE `Dhar`.`Cities` (
  `city_id` INT NOT NULL,
  `city_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`city_id`));


ALTER TABLE `Dhar`.`Profiles` 
ADD INDEX `city_id_idx` (`city_id` ASC) VISIBLE;
;
ALTER TABLE `Dhar`.`Profiles` 
ADD CONSTRAINT `city_id`
  FOREIGN KEY (`city_id`)
  REFERENCES `Dhar`.`Cities` (`city_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
