const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('income',{
        id:{
            allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
        },
        incomeType:{
            type:DataTypes.ENUM,
            values:['Salary','Rent','Busines']
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    });
}

