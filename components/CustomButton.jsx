import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ title, specialStyles, handlePress }) => {
	return (
		<TouchableOpacity
			style={{
				justifyContent: "center",
				alignItems: "center",
				margin: "auto",
			}}
			activeOpacity={0.7}
			onPress={handlePress}>
			<Text style={[styles.containerStyles, specialStyles]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	containerStyles: {
		fontSize: 25,
		width: "100%",
	},
});
