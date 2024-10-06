import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Alert,
	TextInput,
	Image,
	Button,
	TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { firebaseAuth } from "../../firebaseConfig"; // Ensure this path is correct
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, videos } from "../../constants";
import VideoCard from "../../components/VideoCard";

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
		<SafeAreaView style={{ width: "100%", backgroundColor: "#1f292a" }}>
			<ScrollView style={{ backgroundColor: "#1f292a" }}>
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
							handlePress={handleLogout}
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
								placeholderTextColor='#B4B4B4'
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
						<VideoCard
							text='Palolem Beach'
							subtitle='Get yourself lost in the White Sands, swaying palm trees'
							uri={videos.goa}
						/>

						<VideoCard
							text='Digha Beach'
							subtitle='Get yourself lost in the White Sands, swaying palm trees'
							uri={videos.digha}
						/>
						<VideoCard
							text='Lakshadeep Beach'
							subtitle='Get yourself lost in the White Sands, swaying palm trees'
							uri={videos.laksha}
						/>
						<View
							style={{
								justifyContent: "center",
								marginHorizontal: 120,
								marginTop: 10,
							}}>
							<TouchableOpacity
								onPress={() => router.push("/beach")}
								activeOpacity={0.7}>
								<Text style={styles.button}>See More</Text>
							</TouchableOpacity>
						</View>

						{/* Filters  */}
						<Text
							style={{
								fontFamily: "Poppins-SemiBold",
								fontSize: 20,
								marginTop: 30,
								textDecorationLine: "underline",
							}}>
							Filter by your choice
						</Text>
						<View style={styles.choices}>
							<TouchableOpacity style={styles.icons} activeOpacity={0.5}>
								<Image source={icons.sun} style={{ width: 30, height: 30 }} />
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Adventure
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.icons} activeOpacity={0.5}>
								<Image source={icons.waves} style={{ width: 25, height: 25 }} />
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Surfing
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.icons} activeOpacity={0.5}>
								<Image
									source={icons.privacy}
									style={{ width: 25, height: 25 }}
								/>
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Family
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.icons} activeOpacity={0.5}>
								<Image source={icons.hand} style={{ width: 25, height: 25 }} />
								<Text style={{ fontFamily: "Poppins-Medium", fontSize: 12.5 }}>
									Secluded
								</Text>
							</TouchableOpacity>
						</View>
						{/* Filters */}
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
		paddingVertical: 6,
		paddingHorizontal: 20,
		borderRadius: 15,
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
		padding: 15,
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
	button: {
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		color: "white",
		backgroundColor: "#1f292a",
		paddingVertical: 8,
		borderRadius: 10,
		textAlign: "center",
		marginTop: 20,
	},
});
