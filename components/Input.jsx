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
		marginVertical: 10,
		marginHorizontal: 20,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 30,
		paddingHorizontal: 10,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		position: "relative",
		overflow: "hidden",
	},
	textinput: {
		flex: 1,
		fontSize: 16,
		paddingVertical: 15,
		color: "white",
		paddingHorizontal: 20,
	},
	eyeContainer: {
		padding: 5,
	},
	eye: {
		width: 25,
		height: 25,
		tintColor: "#777",
	},
});
