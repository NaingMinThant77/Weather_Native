import { ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

type Location = {
  latitude: number;
  longitude: number;
};
export default function Index() {
  const [location, setLocation] = useState<Location>({
    latitude: 16.8409,
    longitude: 96.1735,
  });

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permission to use this app.");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    };

    getPermission();
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-6">
          <Header />
          <InputBox />
          <Content />
          <Info />
          <Text className="text-center text-secondaryDark text-sm my-8">
            Demo Weather App - Marco
          </Text>
        </View>
        <StatusBar barStyle={"dark-content"} />
      </ImageBackground>
    </SafeAreaView>
  );
}
