import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>Home</Text>
			</View>
			<StatusBar style='light' backgroundColor='black' />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
