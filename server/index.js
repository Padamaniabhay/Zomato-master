//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";    //cross origin request-->it require for send and receive data or api from other server
//it means request will coming from other origin in this origin 
import helmet from "helmet";//---> for security   
import passport from "passport";


//config
import goolgeAuthConfig from "./config/google.config"; 
import routeConfig from "./config/route.config";


//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/reviews";
import User from "./API/User";
import MailService from "./API/Mail"




//Database connection
import ConnectDB from "./database/connection";



const zomato = express();
//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


//passport configuration
goolgeAuthConfig(passport);
routeConfig(passport);

//for application routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Review);
zomato.use("/user",User);
zomato.use("/mail",MailService);


zomato.get("/",(req,res)=>res.json({message:"SetUp Success Yay!!!!!!"}));

zomato.listen(4000,()=>
ConnectDB().then(()=>console.log("Server is Up and running ")).catch(()=>console.log("DB connection Failed "))); 