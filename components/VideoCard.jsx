import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video } from "expo-av";
const VideoCard = ({ text, subtitle, uri }) => {
	return (
		<View>
			<Video
				source={uri}
				style={{ width: "100%", height: 200, marginTop: 10 }}
				shouldPlay
				resizeMode='cover'
				isMuted
				isLooping
			/>
			<Text style={styles.headtext}>{text}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	);
};

export default VideoCard;

const styles = StyleSheet.create({
	headtext: {
		fontFamily: "Amita-Bold",
		fontSize: 25,
		marginTop: 10,
		textAlign: "center",
	},
	subtitle: {
		fontFamily: "Amita-Bold",
		fontSize: 13,
		width: "100%",
		margin: "auto",
		textAlign: "center",
	},
});
