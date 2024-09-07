import {
	Alert,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
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

import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebaseConfig";

const SignIn = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const submit = async () => {
		if (!form.email || !form.password) {
			Alert.alert("Error", "Please fill all fields", [{ text: "OK" }]);
			return;
		}

		setIsSubmitting(true);

		try {
			const userCredential = await signInWithEmailAndPassword(
				firebaseAuth,
				form.email,
				form.password
			);
			const user = userCredential.user;

			Alert.alert("Success", "Logged in successfully!", [
				{ text: "OK", onPress: () => router.push("/home") },
			]);
		} catch (error) {
			Alert.alert("Error", error.message, [{ text: "OK" }]);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ImageBackground source={images.beach5} style={{ flex: 1 }}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<Text style={styles.title}>RipTide</Text>
							<Image source={icons.vectorBlack2} />
						</View>
						<View style={styles.content}>
							<Text style={styles.welcomeText}>Welcome Back</Text>
							<Text style={styles.loginText}>Login to continue</Text>
							<Input
								title='Email'
								value={form.email}
								placeholder='Email Address'
								handleChangeText={(e) => setForm({ ...form, email: e })}
							/>
							<Input
								title='Password'
								value={form.password}
								placeholder='Password'
								handleChangeText={(e) => setForm({ ...form, password: e })}
							/>
							<CustomButton
								title={isSubmitting ? "Logging In..." : "Log In"}
								specialStyles={styles.button}
								handlePress={submit}
								disabled={isSubmitting}
							/>
							<Text
								style={{
									fontSize: 18,
									fontFamily: "Poppins-SemiBold",
									marginTop: 30,
									color: "white",
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
							<Link
								href='#'
								style={{
									textDecorationLine: "underline",
									fontFamily: "Poppins-SemiBold",
									marginTop: 50,
									fontSize: 18,
									color: "white",
								}}>
								Privacy Policy
							</Link>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 20,
								}}>
								<View style={[styles.line, { marginLeft: 50 }]}></View>
								<Text
									style={{
										fontSize: 16,
										textAlign: "center",
										marginHorizontal: 10,
										fontWeight: "bold",
										lineHeight: 20,
										color: "white",
									}}>
									Or
								</Text>
								<View style={[styles.line, { marginRight: 50 }]}></View>
							</View>
							<View
								style={{
									flexDirection: "row",
									width: "100%",
									alignItems: "center",
									justifyContent: "space-evenly",
								}}>
								<Image source={icons.google} style={styles.icon} />
								<Image source={icons.facebook} style={styles.icon} />
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SignIn;

// Add your styles here
const styles = StyleSheet.create({
	title: {
		fontSize: 77,
		fontFamily: "Allura-Regular",

		textAlign: "center",
		transform: [{ translateY: 50 }],
	},

	content: {
		width: "100%",
		alignItems: "center",
	},
	welcomeText: {
		fontFamily: "Poppins-Medium",
		fontSize: 36,
		marginTop: 30,
		textAlign: "center",
	},
	loginText: {
		fontFamily: "Poppins-Medium",
		fontSize: 18,
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
	line: {
		height: 1,
		backgroundColor: "white",
		flex: 1,
	},
	icon: {
		width: 45,
		height: 45,
		marginTop: 10,
	},
});
