import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAurhnwQwJB4tTL7URRHTgSNyZgPCIuSoM",
	authDomain: "waclone-7e3ce.firebaseapp.com",
	projectId: "waclone-7e3ce",
	storageBucket: "waclone-7e3ce.appspot.com",
	messagingSenderId: "311574366878",
	appId: "1:311574366878:web:a4f4f2fc2d41629164098f",
	measurementId: "G-SGV2L3WFMC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider }
export default db;