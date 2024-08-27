import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const TabsLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='home' options={{ headerShown: false }} />
		</Stack>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({});
