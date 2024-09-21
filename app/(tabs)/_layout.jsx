import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { icons } from "../../constants";
const TabIcon = ({ color, focused, icon, name }) => {
	return (
		<View style={{ alignItems: "center", justifyContent: "center" }}>
			<Image
				source={icon}
				resizeMode='contain'
				tintColor={color}
				style={{ width: 22, height: 22 }}
			/>
			<Text
				style={{
					color: color,
					fontFamily: "Poppins-Regular",
					fontSize: 12,
				}}>
				{name}
			</Text>
		</View>
	);
};
const TabsLayout = () => {
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#1f292a",
					tabBarInactiveTintColor: "#666666",
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: "#AFD6DA",
						paddingTop: 10,
						height: 50,
					},
				}}>
				<Tabs.Screen
					name='home'
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.home}
								color={color}
								name='Home'
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='mapView'
					options={{
						title: "Map",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.map}
								color={color}
								name='Map'
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='profile'
					options={{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.profile}
								color={color}
								name='Profile'
								focused={focused}
							/>
						),
					}}
				/>
			</Tabs>
		</KeyboardAvoidingView>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({});
