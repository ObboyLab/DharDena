CREATE TABLE `Dhar`.`ActiveInvestment` (
  `investment_id` INT NOT NULL AUTO_INCREMENT,
  `loan_id` INT NOT NULL,
  `investor_id` INT NOT NULL,
  `open_investment` DECIMAL(14,4) NOT NULL,
  PRIMARY KEY (`investment_id`),
  INDEX `loan_id_idx` (`loan_id` ASC) VISIBLE,
  CONSTRAINT `loan_id`
    FOREIGN KEY (`loan_id`)
    REFERENCES `Dhar`.`ActiveLoans` (`loan_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


ALTER TABLE `Dhar`.`ActiveInvestment` 
ADD INDEX `investor_id_idx` (`investor_id` ASC) VISIBLE;
;
ALTER TABLE `Dhar`.`ActiveInvestment` 
ADD CONSTRAINT `investor_id`
  FOREIGN KEY (`investor_id`)
  REFERENCES `Dhar`.`Users` (`user_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
