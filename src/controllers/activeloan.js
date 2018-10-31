

const ActiveLoan = require('../models').ActiveLoan;
// Post an Active Loan
module.exports = {
create(req, res) {	
// Save to MySQL database

ActiveLoan.create({ 

    status: req.body.status,
    borrower_id: req.body.borrower_id,
    catagory: req.body.catagory,
    opening_balance: req.body.opening_balance,
    interest_rate: req.body.interest_rate,
    periodic_repayment_amount: req.body.periodic_repayment_amount


}).then(active_loan => {	
    console.log(active_loan);	
    // Send created active loan to client
    res.send(active_loan);
});
},
// FETCH all ActiveLoan 
findAll (req, res) {
    
ActiveLoan.findAll()
.then(active_loans => {
  console.log(active_loans);
// We don't need spread here, since only the results will be returned for select queries
res.send(activeloans);
});
},

// FETCH based on borrower ID
findBasedOnID(req, res) {
ActiveLoan.findAll(
    {
        where : { 
            borrower_id: req.params.borrower_id,
            
        }})
.then(active_loans => {
    res.send(active_loans);
});
}
}