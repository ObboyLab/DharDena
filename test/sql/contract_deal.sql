CREATE TABLE `Dhar`.`Contract_Deal` (
  `contract_id` INT NOT NULL AUTO_INCREMENT,
  `borrower_id` INT NOT NULL,
  `lender_id` INT NOT NULL,
  `acceptedOrRejected` INT NOT NULL,
  PRIMARY KEY (`contract_id`),
  INDEX `borrower_id_idx` (`borrower_id` ASC) VISIBLE,
  INDEX `lender_id_idx` (`lender_id` ASC) VISIBLE,
  CONSTRAINT `borrower_id`
    FOREIGN KEY (`borrower_id`)
    REFERENCES `Dhar`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `lender_id`
    FOREIGN KEY (`lender_id`)
    REFERENCES `Dhar`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

