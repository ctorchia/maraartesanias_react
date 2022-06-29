
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgTtJcFlF4rjYgDO3R5WsOIYC5NXWEFTg",
  authDomain: "maraartesanias-react.firebaseapp.com",
  projectId: "maraartesanias-react",
  storageBucket: "maraartesanias-react.appspot.com",
  messagingSenderId: "349421358513",
  appId: "1:349421358513:web:bba3db5b5302fa3c198190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}
