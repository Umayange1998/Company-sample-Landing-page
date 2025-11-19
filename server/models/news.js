module.exports = (sequelize, DataTypes)=>{
    const News = sequelize.define("News", {
        image_url:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
             type: DataTypes.TEXT,
            allowNull: false,
        }

    });
    return News;
}