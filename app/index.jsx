import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const index = () => {
	return (
		<SafeAreaView
			style={{
				justifyContent: "center",
				alignItems: "center",
				margin: "auto",
			}}>
			<Text>index</Text>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
