const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('expense',{
        id:{
            allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
        },
        expenseDate:{
            allowNull:false,
            type:DataTypes.DATE
        },
        expenseAmount:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        epenseDesc:{
            allowNull:false,
            type:DataTypes.STRING
        },
        status:{
            type:DataTypes.ENUM,
            values:['Complete','Pending']
        },
        dueDate:{
            allowNull:false,
            type:DataTypes.DATE
        }
        
    });
}

