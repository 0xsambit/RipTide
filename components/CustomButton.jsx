import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CustomButton = ({ title, specialStyles, handlePress, icon }) => {
	return (
		<TouchableOpacity
			style={{
				justifyContent: "center",
				alignItems: "center",
				margin: "auto",
			}}
			activeOpacity={0.7}
			onPress={handlePress}>
			{icon && (
				<Image
					source={icon}
					style={{ width: 55, height: 55, marginRight: 10 }}
				/>
			)}
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
