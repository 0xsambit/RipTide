import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Beach = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>Beach</Text>
			</View>
			<StatusBar style='light' backgroundColor='black' />
		</SafeAreaView>
	);
};

export default Beach;

const styles = StyleSheet.create({});
