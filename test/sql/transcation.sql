CREATE TABLE `Dhar`.`Transactions` (
  `transaction_id` INT NOT NULL AUTO_INCREMENT,
  `amount` DECIMAL(14,4) NOT NULL,
  `from_account_id` INT NOT NULL,
  `to_account_id` INT NOT NULL,
  `from_account_balance` DECIMAL(14,4) NOT NULL,
  `to_account_balance` DECIMAL(14,4) NOT NULL,
  `trancaction_type` VARCHAR(45) NULL,
  PRIMARY KEY (`transaction_id`),
  INDEX `from_account_id_idx` (`from_account_id` ASC) VISIBLE,
  INDEX `to_account_id_idx` (`to_account_id` ASC) VISIBLE,
  CONSTRAINT `from_account_id`
    FOREIGN KEY (`from_account_id`)
    REFERENCES `Dhar`.`Accounts` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `to_account_id`
    FOREIGN KEY (`to_account_id`)
    REFERENCES `Dhar`.`Accounts` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
