import {
	Alert,
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
const SignIn = () => {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const submit = async () => {
		if (!form.username || !form.password) {
			Alert.alert("Error", "Please fill in all the fields");
			return;
		}
	};
	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../../assets/images/sky-beach.png")}
				style={styles.bgImage}
				resizeMode='cover'>
				<ScrollView>
					<View style={styles.viewContainer1}>
						<Text style={styles.title}>Riptide</Text>
						<Image
							source={require("../../assets/icons/vectorWhite.png")}
							style={{ bottom: 35 }}
						/>
						<Text style={styles.subtitle}>Sign In</Text>
					</View>
					<Input
						value={form.username}
						title='Email'
						placeholder='Username'
						otherStyles={{ marginTop: 10 }}
						handleChangeText={(e) => setForm({ ...form, email: e })}
					/>
					<Input
						value={form.password}
						title='Password'
						placeholder='Password'
						handleChangeText={(e) => setForm({ ...form, password: e })}
					/>
					<CustomButton
						title='Login'
						specialStyles={styles.loginButton}
						handlePress={() => router.push("/home")}
					/>
					<Text
						style={{
							fontFamily: "Poppins-SemiBold",
							fontSize: 24,
							textAlign: "center",
						}}>
						OR,
					</Text>
					<CustomButton
						title='Sign In with'
						specialStyles={styles.OAuth}
						icon={require("../../assets/icons/google.png")}
					/>
				</ScrollView>
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
		fontFamily: "CM-Regular",
		marginTop: -30,
		marginBottom: 30,
	},
	loginButton: {
		fontFamily: "CM-Bold",
		fontSize: 24,
		backgroundColor: "rgba(255,255,255,0.9)",
		paddingHorizontal: 60,
		paddingVertical: 8,
		borderRadius: 40,
		marginVertical: 10,
	},
	OAuth: {
		fontFamily: "CM-Bold",
		fontSize: 24,
		backgroundColor: "rgba(255,255,255,0.9)",
		paddingHorizontal: 60,
		paddingVertical: 8,
		borderRadius: 40,
		marginVertical: 10,
	},
});
