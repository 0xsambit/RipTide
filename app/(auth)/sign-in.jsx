import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../../assets/images/sky-beach.png")}
				style={styles.bgImage}
				resizeMode='cover'>
				<View style={styles.viewContainer1}>
					<Text style={styles.title}>Riptide</Text>
					<Image
						source={require("../../assets/icons/vectorWhite.png")}
						style={{ bottom: 35 }}
					/>
					<Text style={styles.subtitle}>Sign In</Text>
				</View>
			</ImageBackground>
			<StatusBar backgroundColor='black' />
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	bgImage: {
		height: "100%",
	},
	viewContainer1: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
	title: {
		color: "white",
		fontSize: 90,
		fontFamily: "Allison-Regular",
	},
	subtitle: {
		color: "white",
		fontSize: 36,
	},
});
