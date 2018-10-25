module.exports = (connection, Sequelize) => {
    const City = connection.define({
        uuid : {
            type : Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        city_name : {
            type : Sequelize.String
        }
    });

    return City;
}