import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { icons } from "../constants";
const Input = ({
	title,
	value,
	otherStyles,
	placeholder,
	handleChangeText,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<View styles={styles.inputView}>
			<TextInput
				style={styles.textinput}
				value={value}
				placeholder={placeholder}
				secureTextEntry={title === "Password" && !showPassword}
				onChangeText={handleChangeText}
			/>
			{title === "Password" && (
				<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
					<Image
						source={!showPassword ? icons.eye : icons.eyeHide}
						style={styles.eye}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	textinput: {
		flex: 1,
		color: "white",
		fontFamily: "Poppins-SemiBold",
		fontSize: 16,
	},
	inputView: {
		borderWidth: 2,
		borderColor: "black",
		width: "100%",
		height: 64,
		backgroundColor: "black",
		paddingHorizontal: 16,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
	},
});
