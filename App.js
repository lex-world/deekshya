import React from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

/** @context api */

/** @pages */
import Layout from "./Layout";

export default function App() {
  /**
   * @dev Loading Fonts using expo-fonts
   */
  const [fontLoaded] = useFonts({
    "Biryani-Black": require("./assets/fonts/Biryani-Black.ttf"),
    "Biryani-Bold": require("./assets/fonts/Biryani-Bold.ttf"),
    "Biryani-ExtraBold": require("./assets/fonts/Biryani-ExtraBold.ttf"),
    "Biryani-ExtraLight": require("./assets/fonts/Biryani-ExtraLight.ttf"),
    "Biryani-Light": require("./assets/fonts/Biryani-Light.ttf"),
    "Biryani-Regular": require("./assets/fonts/Biryani-Regular.ttf"),
    "Biryani-SemiBold": require("./assets/fonts/Biryani-SemiBold.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("./assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf"),
  });

  if (!fontLoaded) return <ActivityIndicator />;
  else return <Layout />;
}
