import React from "react";
import {
  Platform,
  StyleSheet
} from "react-native";

// @packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @pages
import LanguageSelection from "./Pages/UnAuthenticatedUserStack/LanguageSelection/LanguageSelection";
import { StatusBar } from "expo-status-bar";

const UnAuthenticatedUserStack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <UnAuthenticatedUserStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <UnAuthenticatedUserStack.Screen
            name="Language Selection"
            component={LanguageSelection}
          />
        </UnAuthenticatedUserStack.Navigator>
      </NavigationContainer>
  );
}