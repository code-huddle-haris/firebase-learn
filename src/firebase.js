import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAgKkeceVvlBUVYSm-Ju8kPtiAfNbGn9tw",
  authDomain: "gymyg-staging.firebaseapp.com",
  projectId: "gymyg-staging",
  storageBucket: "gymyg-staging.appspot.com",
  messagingSenderId: "616518155239",
  appId: "1:616518155239:web:98add7b2f3df6af9d01b42",
  measurementId: "G-ZMCKBMWYDN",
};

export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
