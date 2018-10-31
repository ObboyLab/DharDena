

const Repayment = require('../models').Repayment;
// Post a repayment
module.exports = {
create(req, res) {	
// Save to MySQL database

Repayment.create({ 

    from_active_loan_id: req.body.from_active_loan_id,
    to_investor_investment_id: req.body.to_investor_investment_id,
    amount: req.body.amount,
    from_active_loan_balance: req.body.from_active_loan_balance,
    to_investor_investment_balance: req.body.to_investor_investment_balance
  
}).then(repayment => {	
    console.log(repayment);	
    // Send created repayment to client
    res.send(repayment);
});
},
// FETCH all repayments  
findAll (req, res) {
    
Repayment.findAll()
.then(repayments => {
  console.log(repayments);
// We don't need spread here, since only the results will be returned for select queries
res.send(repayments);
});
},

// FETCH based on from_active_load_id and to_investor_investment_id
findBasedOnID(req, res) {
Repayment.findAll(
    {
        where : { 
            from_active_loan_id : req.params.from_active_loan_id,
            to_investor_investment_id : req.params.to_investor_investment_id
        }})
.then(repayments => {
    res.send(repayments);
});
},

//FETCH based on from_active_load_id
findBasedOnSenderID(req, res){
    Repayment.findAll(
        {
            where : {
                from_account_id :req.params.from_account_id
            }
        }
    )
    .then(repayments => {
        res.send(repayments);
    });
},

//FETCH based on to_investor_investment_id
    findBasedOnReceiverID(req, res){
        Repayment.findAll(
            {
                where : {
                    to_investor_investment_id: req.params.to_investor_investment_id
                }
            }
        )
        .then(repayments => {
            res.send(repayments);
        });
    }

};


