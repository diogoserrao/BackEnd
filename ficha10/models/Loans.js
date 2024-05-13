module.exports = (sequelize, type) =>{
    return sequelize.define('loan', {
        loan_id:{
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        return_date: type.DATEONLY,
        loan_date: type.DATEONLY
    });
}