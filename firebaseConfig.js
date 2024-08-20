import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCWiHgv9oA9lQ_KU60rfGc9N2qVDA2XV-A",
	authDomain: "riptide-01.firebaseapp.com",
	projectId: "riptide-01",
	storageBucket: "riptide-01.appspot.com",
	messagingSenderId: "349940915126",
	appId: "1:349940915126:web:6ffea626d5578d706d7f17",
	measurementId: "G-EKSDFS7DS9",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
