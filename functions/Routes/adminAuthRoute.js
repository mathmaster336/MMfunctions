    const express = require("express");
    const { adminlogin } = require("../Controllers/adminAuthController");
    const route = express.Router();

    route.post("/adminlogin",adminlogin)
    route.post("/adminregister",(req,res)=>{

    })

    module.exports= route;