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

router.post("/add", async (req  , res) => { 
    console.log('body', req.body);
    // sequelize.sync().then(() => {
        ProductModel.create({
            Title: req.body.Title,
            Description: req.body.Description,
            Price: req.body.Price,
        }).then(data => {
            // console.log(data);
            return res.status(200).json({
                success: true,
                ID: data.dataValues.ID,
                data: data.dataValues       
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