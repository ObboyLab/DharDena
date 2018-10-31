

const InvestorInvestment = require('../models').InvestorInvestment;
// Post a transaction
module.exports = {
create(req, res) {	
// Save to MySQL database

InvestorInvestment.create({ 

    loan_id: req.body.loan_id,
    investor_id: req.body.investor_id,
    opening_balance: req.body.opening_balance
  
}).then(investor_investment => {	
    console.log(investor_investment);	
    // Send created city to client
    res.send(investor_investment);
});
},
// FETCH all transaction  
findAll (req, res) {
    
InvestorInvestment.findAll()
.then(investor_investments => {
  console.log(investor_investments);
// We don't need spread here, since only the results will be returned for select queries
res.send(transactions);
});
},

// FETCH based on loan_id and investor_id
findBasedOnID(req, res) {
InvestorInvestment.findAll(
    {
        where : { 
            loan_id : req.params.loan_id,
            investor_id : req.params.investor_id
        }})
.then(investor_investments => {
    res.send(investor_investments);
});
},

//FETCH based on loan ID
findBasedLoanID(req, res){
    Transaction.findAll(
        {
            where : {
                loan_id :req.params.loan_id
            }
        }
    )
    .then(investor_investments => {
        res.send(investor_investments);
    });
},

//FETCH based on investor ID
    findBasedOnReceiverID(req, res){
        InvestorInvestment.findAll(
            {
                where : {
                    investor_id : req.params.investor_id
                }
            }
        )
        .then(investor_investment => {
            res.send(investor_investment);
        });
    }

};


