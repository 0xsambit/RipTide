import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
const Index = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#000000" }}>
			<ImageBackground
				source={require("../assets/images/beach1.jpeg")}
				style={styles.bgImage}
				resizeMode='cover'>
				<View style={styles.viewContainer1}>
					<Text style={styles.title}>RipTide</Text>
					<Image
						source={require("../assets/icons/vectorBlack.png")}
						style={{ bottom: 40 }}
					/>
					<Text style={styles.subtitle}>
						Because the ocean deserves respect, and you deserve peace.
					</Text>
				</View>
				<CustomButton
					title='Continue With Email'
					specialStyles={styles.button}
					handlePress={() => router.push("/sign-in")}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default Index;

const styles = StyleSheet.create({
	bgImage: {
		height: "100%",
	},
	viewContainer1: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
	},
	title: {
		color: "black",
		fontSize: 105,
		fontFamily: "Allison-Regular",
	},
	subtitle: {
		color: "black",
		fontSize: 20,
		fontFamily: "Amita-Bold",
		textAlign: "center",
		width: "90%",
	},
	button: {
		marginTop: 150,
		backgroundColor: "rgba(28, 34, 34, 0.9)",
		borderRadius: 30,
		color: "white",
		paddingHorizontal: 50,
		paddingVertical: 10,
	},
});
