module.exports = (sequelize, type) =>{
    return sequelize.define('user', {
        user_id:{
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        email: type.TEXT,
        password: type.TEXT
    });
}