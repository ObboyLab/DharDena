module.exports = (connection, Sequelize){
    const Profile = connection.define({
        uuid : {
            type : Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        first_name : {
            type : Sequelize.STRING
        },
        last_name : {
            type : Sequelize.STRING
        },
        middle_name : {
            type : Sequelize.STRING
        },
        dob : {
            type : Sequelize.DATEONLY
        },
        streetAddress : {
            type : Sequelize.STRING
        },
        tfn : {
            type  : Sequelize.STRING
        },
        post_code :{
            type : Sequelize.INTEGER
        },
        phone_number : {
            type : Sequelize.STRING
        },
        user_id : {
            type : Sequelize.UUID    
        },
        city_id : {
            type : Sequelize.UUID,     
        },

    });
}