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

router.post("/edit/:ID", async (req  , res) => { 
    console.log('body', req.body);
    console.log('params ID', req.params.ID);

    ProductModel.findOne({
        where: {
            ID : req.params.ID
        }
    }).then(data => {
        console.log(data);
        data.update({
            Title: req.body.Title,
            Description: req.body.Description,
            Price: req.body.Price,
        }).then( updatedRecord => {
            console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
            // login into your DB and confirm update
            return res.status(200).json({
                success: true,
                ID: updatedRecord.dataValues.ID,
                data: updatedRecord.dataValues       
            });
          })
        
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        return res.status(400).json({
            success: false,
            message: 'data not found'   
        });
    });

    
    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });
});

router.get("/search", async (req  , res) => { 
    // console.log('body', req.body);
    // console.log('params ID', req.params.ID);
    var customWhere = {};

    ProductModel.findAll({
        where: customWhere
    }).then(data => {
        for (let i = 0; i < data.length; i++)  {
            console.log(data[i].dataValues);
        }
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
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