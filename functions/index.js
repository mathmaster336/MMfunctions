// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {setGlobalOptions} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");
// // const {onCall} = require("firebase-functions/v2/https");
// // const {onDocumentWritten} = require("firebase-functions/v2/firestore");
// const {initializeApp} = require("firebase-admin/app");
// // const {getFirestore} = require("firebase-admin/firestore");
// const express = require("express");
// const cors= require("cors")

// const app = express();
// app.use(cors({ origin: true })); // Allow all origins

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("CORS-enabled Express function!");
// });

// app.post("/submit", (req, res) => {
//   res.json({ message: "Data received" });
// });

// initializeApp();

// setGlobalOptions({maxInstances: 10}); // How much cointer to run at the same time

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// // exports.check = onRequest((req, res)=>{
// //   res.send("Hello from Firebase!");
// // });
// exports.api = onRequest(app);

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");

const adminauthroute=require("./Routes/adminAuthRoute")

// const coureseroutes = require("./Routes/CourseRoutes/Rcourse")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/",adminauthroute);

app.get("/new",(req,res)=>{
    res.send("Hello from new")
})
// exports.api = onRequest(app);

// exports.check = onRequest((req, res) => {
//   res.send("Hello from Firebase!");
// });

exports.api = onRequest(app);
