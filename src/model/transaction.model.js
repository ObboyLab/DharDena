module.exports = (connection, Sequelize) => {
    const Transaction = connection.define({
        uuid : {
            type : Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        amount : {
            type : Sequelize.DOUBLE
        },
        from_account_balance : {
            type : Sequelize.DOUBLE
        },
        to_account_balance : {
            type : Sequelize.DOUBLE
        },
        transaction_type : {
            type : Sequelize.STRING
        },
        to_account_id : {
            type : Sequelize.UUID
        },
        from_account_id : {
            type : Sequelize.UUID 
        }
    })
}