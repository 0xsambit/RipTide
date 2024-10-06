import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Video } from "expo-av";
import axios from "axios";
import CustomButton from "./CustomButton";
const VideoCard = ({ text, subtitle, uri }) => {
	const [data, setData] = useState(null);

	const handleData = async () => {
		try {
			const response = await axios.get(
				`https://run.mocky.io/v3/1668f4a7-e999-4ec4-8f86-bc3849be1d34`
			);
			setData(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleData();
	}, []);
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
			{data && (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View>
						<Text
							style={{
								fontFamily: "Poppins-SemiBold",
								fontSize: 14,
								marginTop: 10,
							}}>
							Temperature: {data.temperature}
						</Text>
						<Text
							style={{
								fontFamily: "Poppins-SemiBold",
								fontSize: 14,
								marginBottom: 10,
							}}>
							Cloud: {data.cloudCover}
						</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => handleData(text)}>
						<Text style={styles.button}>Check Now !!</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default VideoCard;

const styles = StyleSheet.create({
	headtext: {
		fontFamily: "Amita-Bold",
		fontSize: 25,
		textAlign: "center",
	},
	subtitle: {
		fontFamily: "Amita-Bold",
		fontSize: 13,
		width: "100%",
		textAlign: "center",
	},
	button: {
		fontFamily: "Poppins-Medium",
		color: "white",
		backgroundColor: "#1f292a",
		padding: 8,
		borderRadius: 10,
		textAlign: "center",
	},
});
