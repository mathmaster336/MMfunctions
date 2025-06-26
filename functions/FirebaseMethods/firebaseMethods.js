// firestoreUtils.js (CommonJS version)

// const { db } = require("./FirebaseAdmin.js");
import {db} from "../FirebaseMethods/FirebaseAdmin.js"

async function readCollection(collection_name) {
  const snapshot = await db.collection(collection_name).get(); // ✅ no getDocs
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}


const add_singledoc = async (collectionName, docId, data) => {
  try {
    await db.collection(collectionName).doc(docId).set(data);
    return true;
  } catch (error) {
    console.error("❌ Firestore Error:", error.message, error.stack);
    return false;
  }
};


async function update_data(collection_name, Document_name, Data) {
  const res = await db.collection(collection_name).doc(Document_name).update(Data);
  return res;
}

export  {
  readCollection,
  add_singledoc,
  update_data,
};
