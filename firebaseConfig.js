import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // Add this import
import AsyncStorage from "@react-native-async-storage/async-storage"; // Corrected import

const firebaseConfig = {
	apiKey: "AIzaSyCWiHgv9oA9lQ_KU60rfGc9N2qVDA2XV-A",
	authDomain: "riptide-01.firebaseapp.com",
	projectId: "riptide-01",
	storageBucket: "riptide-01.appspot.com",
	messagingSenderId: "349940915126",
	appId: "1:349940915126:web:6ffea626d5578d706d7f17",
	measurementId: "G-EKSDFS7DS9",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistent storage
const firebaseAuth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});

export { firebaseAuth };
