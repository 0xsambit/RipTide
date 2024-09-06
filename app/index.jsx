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
				setUser(user);
				router.push("/home");
			} else {
				setUser(null);
				setLoading(false);
			}
		});

		return unsubscribe;
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
			<ImageBackground source={images.beach3} style={styles.background}>
				<View style={styles.container}>
					<View style={styles.viewContainer}>
						<Text style={styles.title}>RipTide</Text>
						<Image source={icons.vectorBlack} style={styles.icon} />
						<Text style={styles.subtitle}>
							Because the ocean deserves respect, and you deserve peace.
						</Text>
					</View>
					<CustomButton
						title='Discover the Oceans'
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
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
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
		marginTop: -65,
	},
	subtitle: {
		fontFamily: "Poppins-Medium",
		fontSize: 24,
		textAlign: "center",
		marginHorizontal: 30,
		marginVertical: 40,
	},
	button: {
		backgroundColor: "#0F1E20",
		color: "white",
		width: 300,
		height: 50,
		borderRadius: 10,
		textAlign: "center",
		fontFamily: "Poppins-SemiBold",
		lineHeight: 50,
		marginTop: 10,
		paddingHorizontal: 30,
	},
});
