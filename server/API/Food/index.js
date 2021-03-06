import express  from "express";
import passport from "passport";

//Database model
import { FoodModel } from "../../database/allModels";

//validation
import { ValidateRestaurantId,ValidateCategory } from "../../validation/food";

const Router = express.Router();



/*
Route           /r
Descrip         Get all the foods based on particular restaurant
Params          _id
Access          Public
Method          GET
*/

Router.get("/r/:_id",async(req,res)=>{
    try{

        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant:_id});

        return res.json({foods});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});


/*
Route           /:_id
Descrip         Get food based on id
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id",async(req,res)=>{
    try{

        const {_id} = req.params;
        const foods = await FoodModel.findById(_id);

        return res.json({foods});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});





/*
Route           /c
Descrip         Get all the food based on particular category
Params          category
Access          Public
Method          GET
*/

Router.get("/c/:category",async (req,res)=>{
    try{

        await ValidateCategory(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({
            category:{$rejex:category,$options:"i"}
        })
        return res.json({foods});

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});




export default Router;