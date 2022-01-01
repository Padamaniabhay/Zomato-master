import express  from "express";
import { RestaurantModel } from "../../database/allModels";
 
//validation
import { ValidateRestaurantCity,ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();
 
/*
Route           /
Descrip         Get all Restauranrts details based on city
Params          None
Access          Public
Method          GET  
*/

Router.get("/",async(req,res)=>{
    try{

        await ValidateRestaurantCity(req.query);


        //our URL will be /restaurant/?city=rajkot
        const {city}=req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
})





/*
Route           /
Descrip         Get particular Restauranrts details on id
Params          _id
Access          Public
Method          GET
*/


Router.get("/:_id",async(req,res)=>{
    try{

        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if(!restaurant)
            return res.status(500).json({error:"Restaurant not found"});
        return res.json({restaurant});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
})




/*
Route           /
Descrip         Get Restauranrts details on search
Params          None
Body            searchString
Access          Public
Method          GET
*/


Router.get("/search",async(req,res)=>{
    try{

        await ValidateRestaurantSearchString(req.body);

        const {searchString} = req.body;

        const restaurants = await RestaurantModel.find({
            name:{$regex: searchString, $options:"i"}        //options:"i" means case insensitive                         //regex conccept for searching find substring and give o/p 
        });
        if(restaurants)
            return res.status(404).json({error:`No restaurant matched with ${searchString} not found`})
        return res.json({restaurants});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
} )

export default Router;

