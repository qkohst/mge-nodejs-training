const { Sequelize, DataTypes } = require("sequelize");
// const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'mge-training',
 'root',
 '2242374',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = function(sequelize, DataTypes){
    return sequelize.define("Product", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Created: {
            type: DataTypes.DATE,
        },  
        LastEdited: {
            type: DataTypes.DATE,
        },  
        Title: {
        type: DataTypes.STRING,
        },
        Description: {
        type: DataTypes.STRING,
        },    
        Price: {
        type: DataTypes.DOUBLE,
        }
    })
}