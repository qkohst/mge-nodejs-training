const {
    Sequelize,
    DataTypes
} = require("sequelize");
// const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'mge-training-node',
    'root',
    '', {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Product = sequelize.define("Product", {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
});

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Product;