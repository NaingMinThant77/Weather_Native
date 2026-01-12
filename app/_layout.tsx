import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <Stack
      initialRouteName="splash-screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="splash-screen" />
      <Stack.Screen name="index" />
      <Stack.Screen name="forecast" />
      <Stack.Screen name="qrcode" />
    </Stack>
  );
}
