// // firebaseAdmin.js
// import admin from "firebase-admin";
// import { readFileSync } from "fs";

// // Load the service account key
// const serviceAccount = JSON.parse(readFileSync("serviceAccountKey.json", "utf8"));

// // Initialize the Firebase admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "mathmaster-cbffc.appspot.com" // update with your bucket name
// });

// // Export Firestore, Auth, and Storage
// const db = admin.firestore();
// const auth = admin.auth();
// const bucket = admin.storage().bucket();

// export { db, auth, bucket };

// firebaseAdmin.js
// const admin = require("firebase-admin");
// const path = require("path");
// const fs = require("fs");
// const { getStorage } = require("firebase-admin/storage");

// // Load service account key from correct path
// const serviceAccountPath = path.join(__dirname, "ServiceAccountKey.json");

// const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "mathmaster-cbffc.appspot.com",
// });

// // Export Firestore, Auth, and Storage
// const db = admin.firestore();
// const auth = admin.auth();
// const storage = admin.storage().bucket(); // For uploading/downloading files

// module.exports = { admin, db, auth, storage };


// import admin from "firebase-admin";
// import path from "path";
// import fs from "fs";
// import { getStorage } from "firebase-admin/storage";
// import { fileURLToPath } from "url";

// // __dirname workaround in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load service account key
// const serviceAccountPath = path.join(__dirname, "ServiceAccountKey.json");
// const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "mathmaster-cbffc.appspot.com",
// });

// // Export Firestore, Auth, and Storage
// const db = admin.firestore();
// const auth = admin.auth();
// const storage = getStorage().bucket(); // Or: admin.storage().bucket()

// export { admin, db, auth, storage };

import admin from "firebase-admin";

admin.initializeApp(); // ✅ uses default credentials

const db = admin.firestore();
const auth = admin.auth();
const storage=admin.storage();
export { admin, db, auth, storage };
