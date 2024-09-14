import React, { useEffect, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Alert,
	TextInput,
	Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { firebaseAuth } from "../../firebaseConfig"; // Ensure this path is correct
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
const Home = () => {
	const handleLogout = async () => {
		console.log("Button Pressed");
		try {
			await signOut(firebaseAuth);
			Alert.alert("Success", "Logged out successfully!");
			router.replace("/sign-in");
		} catch (error) {
			console.log(error);
			Alert.alert("Error", error.message);
		}
	};

	return (
		<SafeAreaView style={{ width: "100%" }}>
			<ScrollView>
				<View>
					<View style={styles.viewContainer1}>
						<Text
							style={{
								color: "white",
								fontSize: 16,
								fontFamily: "Poppins-Regular",
							}}>
							Welcome Sambit
						</Text>
						<CustomButton
							title='Logout'
							onPress={handleLogout}
							specialStyles={styles.specialStyles}
						/>
					</View>
					<View style={styles.viewContainer2}>
						<Text
							style={{
								color: "white",
								fontFamily: "Poppins-Bold",
								fontSize: 28,
							}}>
							Checkout Beaches
						</Text>
						<View style={styles.inputContainer}>
							<TextInput
								placeholder='Search beach name'
								style={styles.input}
								keyboardType='default'
								editable={true}
								multiline={false}
								placeholderTextColor='white'
							/>
							<Image
								source={icons.rightArrow}
								resizeMode='contain'
								style={styles.arrow}
							/>
						</View>
					</View>
					<View style={styles.viewContainer3}>
						<Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
							Nearby Beaches
						</Text>
						<Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
							Filter by your choice
						</Text>
						<View style={styles.choices}>
							<View style={styles.icons}>
								<Image source={icons.sun} style={{ width: 30, height: 30 }} />
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Adventure
								</Text>
							</View>
							<View style={styles.icons}>
								<Image source={icons.waves} style={{ width: 25, height: 25 }} />
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Surfing
								</Text>
							</View>
							<View style={styles.icons}>
								<Image
									source={icons.privacy}
									style={{ width: 25, height: 25 }}
								/>
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Family
								</Text>
							</View>
							<View style={styles.icons}>
								<Image source={icons.hand} style={{ width: 25, height: 25 }} />
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Secluded
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<StatusBar style='light' backgroundColor='#1f292a' />
		</SafeAreaView>
	);
};

export default Home;
const styles = StyleSheet.create({
	viewContainer1: {
		width: "100%",
		height: "auto",
		backgroundColor: "#1f292a",
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	specialStyles: {
		color: "white",
		backgroundColor: "rgba(124, 124, 124, 0.4)",
		paddingVertical: 8,
		paddingHorizontal: 20,
		borderRadius: 20,
		fontSize: 14,
		transform: [{ translateX: 65 }],
	},
	viewContainer2: {
		backgroundColor: "#1f292a",
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	input: {
		flex: 1,
		backgroundColor: "rgba(94,94,94,0.46)",
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 10,
		fontFamily: "Poppins-Medium",
		color: "white",
	},
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
	},
	arrow: {
		position: "absolute",
		right: 20,
	},
	viewContainer3: {
		backgroundColor: "#fffcef",
		height: "100%",
		width: "100%",
		padding: 20,
	},
	choices: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 20,
	},
	icons: {
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
	},
});
