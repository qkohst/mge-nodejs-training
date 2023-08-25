const express = require("express");
const router = express.Router();
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
const ProductModel = require("../model/Product.model"); 

router.post("/add", async (req, res) => { 
    // sequelize.sync().then(() => {
        Product.create({
            Title: "Test 1",
            Content: "content test 1",
            Price: 123000,
        }).then(res => {
            console.log(res);
            return res.status(200).json({
                success: true,
                ID: res.dataValues.ID         
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