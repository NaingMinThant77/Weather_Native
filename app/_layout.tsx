import { Stack } from "expo-router";
import "../global.css";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="forecast" options={{ headerShown: false }} />
      <Stack.Screen
        name="qrcode"
        options={{ title: "React Native Course", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;

// import { Slot } from "expo-router";

// import "../global.css";

// export default Slot;

//Splash Screen
// import { Slot } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect, useState, useCallback } from "react";
// import { View } from "react-native";
// import "../global.css";

// // Prevent the splash screen from auto-hiding
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Simulate loading (e.g., waiting for your weather store to init)
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }
//     prepare();
//   }, []);

//   // This function is called when the root view layout is complete
//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <Slot />
//     </View>
//   );
// }
