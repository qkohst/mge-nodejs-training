const express = require("express");
const router = express.Router();
const ProductModel = require("../model/Product.model").Product; 
const sequelize = require("sequelize");

router.post("/add", async (req, res) => { 
    sequelize.sync().then(() => {
        ProductModel.create({
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
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
});

module.exports = router;