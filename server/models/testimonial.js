module.exports = (sequelize, DataTypes)=>{
    const Testimonial = sequelize.define("Testimonial", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        designation:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
             type: DataTypes.TEXT,
            allowNull: false,
        }

    });
    return Testimonial;
}