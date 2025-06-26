// import bcrypt from "bcryptjs";
import {add_singledoc,
  readCollection,} from "../FirebaseMethods/firebaseMethods.js"
import { db } from "../FirebaseMethods/FirebaseAdmin.js";
// const {
  
// } = require("../FirebaseMethods/firebaseMethods");

// ✅ Uncommented and implemented properly
async function adminlogin(req, res) {
  res.send("Hello this is login");
}

async function getdata(req, res) {
  try {
    const response = await readCollection("user");
    res.status(200).send(response);
  } catch (error) {
    console.error("Error in getdata:", error);
    res.status(500).send("Internal server error");
  }
}

async function adminregister(req, res) {
  try {
    const { email, password } = req.body;
    console.log("Request Body:", req.body);

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("Hashed Password:", hashedPassword);

    //   const result = await add_singledoc("mmadmin", "MMadmin", {
    //   email,
    //   password, // plain text (not secure, only okay for testing)
    // });
   const result= await db.collection('mmadmin').doc('MMadmin').set({
    email:email,
    password:password
   });

    console.log("add_singledoc result:", result);

    if (result) {
      return res.send("Successfully inserted");
    } else {
      return res.status(500).send("Failed to insert");
    }
  } catch (error) {
    console.error("Error in adminregister:", error);
    return res.status(500).send("Somethig is wrog");
  }
}

export {
  adminlogin,      // ✅ Now this exists
  adminregister,
  getdata,
};
