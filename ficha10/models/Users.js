module.exports = (sequelize, type) =>{
    return sequelize.define('user', {
        user_id:{
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        first_name: type.TEXT,
        last_name: type.TEXT,
        email: type.TEXT,
        address: type.TEXT,
        phone_number: type.TEXT
    });
}