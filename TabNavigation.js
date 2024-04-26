import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import Info from "./screens/Info";
import User from "./screens/User";
import Gallery from "./screens/Gallery";

const Tab = createMaterialTopTabNavigator();

const MyTabNavigation = () => {
  return (
    <View style={styles.main}>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === "Новини") {
              iconName = "home";
            } else if (route.name === "Галерея") {
              iconName = "list";
            } else if (route.name === "Кабінет") {
              iconName = "person";
            }

            return (
              <View style={{ alignItems: "center" }}>
                <Ionicons name={iconName} size={25} color={"#FFFFFF"} />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            const { name } = route;
            return (
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#FFFFFF", fontSize: 12 }}>{name}</Text>
              </View>
            );
          },

          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIndicatorStyle: {
            backgroundColor: "#FFFFFF",
          },
          tabBarStyle: {
            backgroundColor: "#224A98",
          },
        })}
      >
        <Tab.Screen name="Новини" component={Info} />
        <Tab.Screen name="Галерея" component={Gallery} />
        <Tab.Screen name="Кабінет" component={User} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default MyTabNavigation;
