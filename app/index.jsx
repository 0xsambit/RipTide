import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebaseConfig";

const Index = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				// User is signed in
				setUser(user);
				router.push("/home"); // Redirect to the main app screen
			} else {
				// User is signed out
				setUser(null);
				setLoading(false);
			}
		});

		return unsubscribe; // Unsubscribe on unmount
	}, []);

	if (loading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' color='black' />
			</View>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ImageBackground source={images.beach2} style={styles.background}>
				<View style={styles.container}>
					<View style={styles.viewContainer}>
						<Text style={styles.title}>RipTide</Text>
						<Image source={icons.vectorBlack} style={styles.icon} />
					</View>
					<Text style={styles.subtitle}>
						Because the ocean deserves respect, and you deserve peace.
					</Text>
					<CustomButton
						title='Explore'
						specialStyles={styles.button}
						handlePress={() => router.push("/sign-in")}
					/>
				</View>
			</ImageBackground>
			<StatusBar style='light' backgroundColor='#000000' />
		</SafeAreaView>
	);
};

export default Index;

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 180,
	},
	viewContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 110,
		fontFamily: "Allura-Regular",
	},
	icon: {
		marginTop: -55,
	},
	subtitle: {
		fontFamily: "Poppins-Medium",
		fontSize: 24,
		textAlign: "center",
		marginHorizontal: 30,
		color: "white",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#0F1E20",
		color: "white",
		width: 200,
		height: 50,
		borderRadius: 10,
		textAlign: "center",
		fontFamily: "Poppins-SemiBold",
		lineHeight: 50,
		marginTop: 10,
	},
});
