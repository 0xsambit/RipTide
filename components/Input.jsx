import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const Input = ({ title, value, placeholder, handleChangeText }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View style={styles.inputView}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textinput}
					value={value}
					placeholder={placeholder}
					placeholderTextColor='rgba(255,255,255,0.7)'
					secureTextEntry={title === "Password" && !showPassword}
					onChangeText={handleChangeText}
					blur
				/>
				{title === "Password" && (
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
						style={styles.eyeContainer}>
						<Image
							source={!showPassword ? icons.eye : icons.eyeHide}
							style={styles.eye}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputView: {
		marginTop: 20,
	},
	inputContainer: {
		width: "75%",
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: "rgba(255,255,255,0.7)",
	},
	textinput: {
		flex: 1,
		padding: 5,
		color: "white",
		fontFamily: "Poppins-Medium",
		fontSize: 15,
	},

	eyeContainer: {
		padding: 5,
	},
	eye: {
		width: 25,
		height: 25,
		tintColor: "#fff",
	},
});
