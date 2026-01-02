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

export type Weather = {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    time: string[];
    weathercode: number[];
  };
  latitude: number;
  longitude: number;
};

export default function Index() {
  const [location, setLocation] = useState<Location>({
    latitude: 16.8409,
    longitude: 96.1735,
  });

  const [weatherInfo, setWeatherInfo] = useState<Weather>();
  const [city, setCity] = useState<string>("Yangon");

  useEffect(() => {
    // Getting Device Location
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

    // Fetching Weather
    const getWeatherInfo = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
        );
        const data = await res.json();
        setWeatherInfo(data);
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    const getReverseGeocode = async () => {
      const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setCity(reverseGeocodeResponse[0].city!);
    };

    getPermission();
    getWeatherInfo();
    getReverseGeocode();
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-6">
          <Header cityName={city} />
          <InputBox />
          {weatherInfo && <Content weatherInfo={weatherInfo} />}
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
