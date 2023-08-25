const { Sequelize, DataTypes } = require("sequelize");

const Product = sequelize.define("Product", {
    ID: {
        type: DataTypes.INTEGER,
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
 });

 sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });