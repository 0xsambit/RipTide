import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const Index = () => {
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
