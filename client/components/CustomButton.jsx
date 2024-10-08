import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CustomButton = ({ title, specialStyles, handlePress }) => {
	return (
		<TouchableOpacity
			style={{
				justifyContent: "center",
				alignItems: "center",
				margin: "auto",
			}}
			activeOpacity={0.8}
			onPress={handlePress}>
			<Text style={[styles.containerStyles, specialStyles]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	containerStyles: {
		fontSize: 20,
		width: "100%",
	},
});
