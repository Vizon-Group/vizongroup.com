import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7tNCdDUc3HB5TaYgOPnthrT5NdALsfRY",
  authDomain: "vison-bcab9.firebaseapp.com",
  projectId: "vison-bcab9",
  storageBucket: "vison-bcab9.appspot.com",
  messagingSenderId: "616133326984",
  appId: "1:616133326984:web:e413534d426af4db28c73d",
  measurementId: "G-41JWKL4TXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveContactInfo = async (name, email, message) => {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      to: "yantingyu@gmail.com",
      message: {
        subject: "New message from " + name,
        text: "Email: " + email + "\nMessage: " + message,
        html: "",
      },
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { saveContactInfo };
