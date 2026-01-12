import React, { useCallback, useEffect } from "react";
import { Text, Image } from "react-native";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Splash() {
  const router = useRouter();
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onLayoutRootView = useCallback(async () => {
    // ✅ Hide native splash AFTER layout is ready
    await SplashScreen.hideAsync();

    opacity.value = withTiming(1, { duration: 1000 });

    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);

  return (
    <Animated.View
      onLayout={onLayoutRootView}
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        },
        animatedStyle,
      ]}
    >
      <Image
        source={require("../assets/snow.png")}
        style={{ width: 150, height: 150 }}
        resizeMode="contain"
      />
      <Text className="mt-4 text-2xl font-semibold text-blue-500">
        Weather Native
      </Text>
    </Animated.View>
  );
}
