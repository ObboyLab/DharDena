

const Transaction = require('../models').Transaction;
    // Post a transaction
module.exports = {
    create(req, res) {	
    // Save to MySQL database
    
    Transaction.create({ 

      amount: req.body.amount,
      from_account_balance : req.body.from_account_balance,
      to_account_balance : req.body.to_account_balance,
      transaction_type : req.body.transaction_type,
      to_account_id : req.body.to_account_id,
      from_account_id : req.body.from_account_id
      
	}).then(transaction => {	
        console.log(transaction);	
		// Send created city to client
        res.send(transaction);
    });
},
    // FETCH all transaction  
    findAll (req, res) {
        
    Transaction.findAll()
   .then(transactions => {
      console.log(transactions);
    // We don't need spread here, since only the results will be returned for select queries
    res.send(transactions);
  });
},

    // FETCH based on sender and receiver account ID
    findBasedOnID(req, res) {
    Transaction.findAll(
        {
            where : { 
                from_account_id : req.params.from_account_id,
                to_account_id : req.params.to_account_id
            }})
    .then(transactions => {
        res.send(transactions);
    });
},

    //FETCH based on sender ID
    findBasedOnSenderID(req, res){
        Transaction.findAll(
            {
                where : {
                    from_account_id :req.params.from_account_id
                }
            }
        )
        .then(transactions => {
            res.send(transactions);
        });
    },

    //FETCH based on receiver ID
        findBasedOnReceiverID(req, res){
            Transaction.findAll(
                {
                    where : {
                        to_account_id : req.params.to_account_id
                    }
                }
            )
            .then(transactions => {
                res.send(transactions);
            });
        }
    
};


