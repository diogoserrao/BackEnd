module.exports = (sequelize, type) =>{
    return sequelize.define('book', {
        book_id:{
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        title: type.TEXT,
        author_name: type.TEXT,
        publication_date: type.DATEONLY,
        genre: type.TEXT,
        available_copies: type.INTEGER
    });
}