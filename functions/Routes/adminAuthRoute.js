    import express from "express";
    import { adminlogin, adminregister, getdata } from "../Controllers/adminAuthController.js"; // 🔁 add `.js`

    const route = express.Router();

    route.post("/adminlogin", adminlogin);
    route.post("/adminregister", adminregister);
    route.post("/getdata", getdata);

    export default route; // 🔁 instead of module.exports
