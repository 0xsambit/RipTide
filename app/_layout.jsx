import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
		"Allison-Regular": require("../assets/fonts/Allison-Regular.ttf"),
		"Amita-Regular": require("../assets/fonts/Amita-Regular.ttf"),
		"Amita-Bold": require("../assets/fonts/Amita-Bold.ttf"),
		"AD-Regular": require("../assets/fonts/ArchitectsDaughter-Regular.ttf"),
		"CM-Bold": require("../assets/fonts/CormorantUpright-Bold.ttf"),
		"CM-Light": require("../assets/fonts/CormorantUpright-Light.ttf"),
		"CM-Medium": require("../assets/fonts/CormorantUpright-Medium.ttf"),
		"CM-Regular": require("../assets/fonts/CormorantUpright-Regular.ttf"),
		"CM-SemiBold": require("../assets/fonts/CormorantUpright-SemiBold.ttf"),
	});
	useEffect(() => {
		if (error) throw error;
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) {
		return null;
	}
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='(auth)' options={{ headerShown: false }} />
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
		</Stack>
	);
};

export default RootLayout;

const styles = StyleSheet.create({});
