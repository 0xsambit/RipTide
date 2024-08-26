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
const SignIn = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const submit = async () => {
		if (!form.email || !form.password) {
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
						value={form.email}
						title='Email'
						placeholder='Email address'
						otherStyles={{ marginTop: 10 }}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						keyboardType='email-address'
					/>
					<Input
						value={form.email}
						title='Password'
						placeholder='Password'
						otherStyles={{ marginTop: 10 }}
						handleChangeText={(e) => setForm({ ...form, password: e })}
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
	},
});
