import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import {useFonts} from 'expo-font';
import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady] = useFonts({
      robotobold: require('./src/assets/fonts/Roboto-Bold.ttf'),
      robotomedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
      robotregular: require('./src/assets/fonts/Roboto-Regular.ttf'),
    });

  const handleOnLayout = useCallback(async() => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady])

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
