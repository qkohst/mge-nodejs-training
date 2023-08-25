const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
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
const ProductModel = require("../model/Product.model"); 

router.post("/add", async (req, res) => { 
    // sequelize.sync().then(() => {
        ProductModel.create({
            Title: "Test 1",
            Description: "content test 1",
            Price: 123000,
        }).then(data => {
            console.log(data);
            return res.status(200).json({
                success: true,
                ID: data.dataValues.ID         
            });
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
            return res.status(400).json({
                success: false,
                message: error.message        
            });
        });
    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });
});

module.exports = router;