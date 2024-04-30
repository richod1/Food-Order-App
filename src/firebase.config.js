import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAq4eFBV2AhnKuKVuzUXj4QLovCpMn9BZk",
  authDomain: "food-order-c6f09.firebaseapp.com",
  projectId: "food-order-c6f09",
  storageBucket: "food-order-c6f09.appspot.com",
  messagingSenderId: "883108558733",
  appId: "1:883108558733:web:1d3952e3b8ca6642972fc4",
  measurementId: "G-WL9KVKJZ26"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, firestore, storage,analytics };
