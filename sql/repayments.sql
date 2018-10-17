CREATE TABLE `Dhar`.`repayments` (
  `repayment_id` INT NOT NULL AUTO_INCREMENT,
  `from_active_loan_id` INT NOT NULL,
  `to_investor_active_investment_id` INT NOT NULL,
  `amount` DECIMAL(14,4) NOT NULL,
  `from_active_loan_balance` DECIMAL(14,4) NOT NULL,
  `to_active_investor_investment_balance` DECIMAL(14,4) NOT NULL,
  PRIMARY KEY (`repayment_id`),
  INDEX `from_active_loan_id_idx` (`from_active_loan_id` ASC) VISIBLE,
  INDEX `to_investor_active_investment_id_idx` (`to_investor_active_investment_id` ASC) VISIBLE,
  CONSTRAINT `from_active_loan_id`
    FOREIGN KEY (`from_active_loan_id`)
    REFERENCES `Dhar`.`ActiveLoans` (`loan_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `to_investor_active_investment_id`
    FOREIGN KEY (`to_investor_active_investment_id`)
    REFERENCES `Dhar`.`ActiveInvestment` (`investment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
