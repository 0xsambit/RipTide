import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ title, specialStyles }) => {
	return (
		<TouchableOpacity
			style={{
				justifyContent: "center",
				alignItems: "center",
				margin: "auto",
			}}>
			<Text style={specialStyles}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	containerStyles: {},
});
