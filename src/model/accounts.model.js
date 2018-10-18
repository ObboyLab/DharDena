module.exports = (connection, Sequelize) =>{
    const Account = connection.define({
        uuid : {
            type : Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        account_type : {
            type : Sequelize.STRING
        },
        user_id : {
            type : Sequelize.UUID
        }
    });
}