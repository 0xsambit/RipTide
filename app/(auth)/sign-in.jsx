import {
	Alert,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
	const submit = async () => {
		Alert.alert("Error", "Invalid username or password", [{ text: "OK" }]);
		return;
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ImageBackground source={images.sky} style={{ flex: 1 }} blurRadius={20}>
				<View style={styles.overlay}>
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={styles.title}>RipTide</Text>
						<Image source={icons.vectorWhite} />
					</View>
					<View style={styles.content}>
						<Text style={styles.welcomeText}>Welcome Back</Text>
						<Text style={styles.loginText}>Login to continue</Text>
						<Input
							title='Username'
							value={form.username}
							placeholder='Username'
							handleChangeText={(e) => setForm({ ...form, username: e })}
						/>
						<Input
							title='Password'
							value={form.password}
							placeholder='Password'
							handleChangeText={(e) => setForm({ ...form, password: e })}
						/>
						<CustomButton
							title='Log In'
							specialStyles={styles.button}
							handlePress={() => router.push("/home")}
						/>
						<Text
							style={{
								fontSize: 18,
								fontFamily: "Poppins-SemiBold",
								marginTop: 10,
							}}>
							Not a member?{" "}
							<Link
								href='/sign-up'
								style={{
									textDecorationLine: "underline",
								}}>
								Sign Up
							</Link>
						</Text>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	title: {
		fontSize: 75,
		fontFamily: "Allura-Regular",
		color: "white",
		textAlign: "center",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},

	content: {
		width: "100%",
		alignItems: "center",
	},
	welcomeText: {
		fontFamily: "Poppins-Medium",
		fontSize: 36,
		color: "white",
		marginTop: 30,
		textAlign: "center",
	},
	loginText: {
		fontFamily: "Poppins-Medium",
		fontSize: 18,
		color: "#BFBCBC",
		textAlign: "center",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#053A51",
		color: "white",
		width: 230,
		height: 50,
		borderRadius: 10,
		textAlign: "center",
		fontFamily: "Poppins-SemiBold",
		lineHeight: 50,
		marginTop: 30,
	},
});
