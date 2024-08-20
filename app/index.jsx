import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";

const index = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#000000" }}>
			<ImageBackground
				source={require("../assets/images/beach1.jpeg")}
				style={styles.bgImage}
				resizeMode='cover'>
				<View style={styles.viewContainer1}>
					<Text style={styles.title}>RipTide</Text>
					<Text style={styles.subtitle}>
						Because the ocean deserves respect, and you deserve peace.
					</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default index;

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
		fontSize: 110,
		fontFamily: "Allison-Regular",
	},
	subtitle: {
		color: "black",
		fontSize: 20,
		fontFamily: "Amita-Bold",
		textAlign: "center",
		width: "90%",
	},
});
