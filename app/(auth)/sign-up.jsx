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

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebaseConfig";

const SignUp = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
	});

	const submit = async () => {
		if (!form.username || !form.email || !form.password) {
			Alert.alert("Error", "Please fill all fields", [{ text: "OK" }]);
			return;
		}

		setIsSubmitting(true);

		try {
			const userCredential = await createUserWithEmailAndPassword(
				firebaseAuth,
				form.email,
				form.password
			);
			const user = userCredential.user;

			Alert.alert("Success", "Account created successfully!", [
				{ text: "OK", onPress: () => router.push("/sign-in") },
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
							<Text style={styles.welcomeText}>Welcome</Text>
							<Text style={styles.loginText}>Sign Up</Text>
							<Input
								title='Username'
								value={form.username}
								placeholder='Username'
								handleChangeText={(e) => setForm({ ...form, username: e })}
							/>
							<Input
								title='Email'
								value={form.email}
								placeholder='Email'
								handleChangeText={(e) => setForm({ ...form, email: e })}
							/>
							<Input
								title='Password'
								value={form.password}
								placeholder='Password'
								handleChangeText={(e) => setForm({ ...form, password: e })}
							/>
							<CustomButton
								title={isSubmitting ? "Signing Up..." : "Sign Up"}
								specialStyles={styles.button}
								handlePress={submit}
								disabled={isSubmitting}
							/>
							<Text
								style={{
									fontSize: 18,
									fontFamily: "Poppins-SemiBold",
									marginTop: 20,
									color: "white",
								}}>
								Already a member?{" "}
								<Link
									href='/sign-in'
									style={{
										textDecorationLine: "underline",
									}}>
									Log In
								</Link>
							</Text>
							<Link
								href='#'
								style={{
									textDecorationLine: "underline",
									fontFamily: "Poppins-SemiBold",
									marginTop: 30,
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

export default SignUp;

// Add your styles here
const styles = StyleSheet.create({
	title: {
		fontSize: 80,
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
		fontSize: 38,

		textAlign: "center",
	},
	loginText: {
		fontFamily: "Poppins-Medium",
		fontSize: 18,
		textAlign: "center",
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
		marginTop: 40,
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
