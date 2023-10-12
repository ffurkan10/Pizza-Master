"use client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTP25M7wkaFbkd8JfLx6uYHlTP7XMcOKo",
  authDomain: "pizza-d80d1.firebaseapp.com",
  projectId: "pizza-d80d1",
  storageBucket: "pizza-d80d1.appspot.com",
  messagingSenderId: "20957974117",
  appId: "1:20957974117:web:5280ae977a4dca0446808c",
  measurementId: "G-2HXSP0KW4B",
};

const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  getAnalytics(app);
}
export const auth = getAuth(app);
