import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Video } from "expo-av";
import axios from "axios";
import CustomButton from "./CustomButton";
const VideoCard = ({ text, subtitle, uri }) => {
	const [data, setData] = useState(null);

	const location = encodeURIComponent(text);

	const handleData = async () => {
		try {
			const response = await axios.get(
				`http://api.weatherapi.com/v1/current.json?q=${location}&key=80aaacd93a83479c968171306240710`
			);

			setData(response.data.current);
		} catch (error) {
			console.log(error.response ? error.response.data : error.message);
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
							Temperature: {data.temp_c}&deg;C
						</Text>
						<Text
							style={{
								fontFamily: "Poppins-SemiBold",
								fontSize: 14,
								marginBottom: 10,
							}}>
							Cloud: {data.cloud}
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
