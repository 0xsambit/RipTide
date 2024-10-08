import {
	StyleSheet,
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
					placeholderTextColor='black'
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
		borderBottomColor: "black",
	},
	textinput: {
		flex: 1,
		padding: 5,
		fontFamily: "Poppins-SemiBold",
		fontSize: 15,
		color: "white",
	},

	eyeContainer: {
		padding: 5,
	},
	eye: {
		width: 25,
		height: 25,
		tintColor: "black",
	},
});
