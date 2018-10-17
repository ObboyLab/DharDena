CREATE TABLE `Dhar`.`ActiveLoans` (
  `loan_id` INT NOT NULL AUTO_INCREMENT,
  `borrower_id` INT NOT NULL,
  `openning_balance` DECIMAL(14,4) NOT NULL,
  `interest_rate` DECIMAL(14,4) NOT NULL,
  `periodic_repayment_amount` DECIMAL(14,4) NOT NULL,
  `cycle` INT NOT NULL,
  PRIMARY KEY (`loan_id`),
  INDEX `borrower_id_idx` (`borrower_id` ASC) VISIBLE,
  CONSTRAINT `borrower_id`
    FOREIGN KEY (`borrower_id`)
    REFERENCES `Dhar`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);