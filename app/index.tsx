import { ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useWeatherStore } from "../store/weather-store";
import { getWeatherInfo } from "../utils/weather-api";

type Location = {
  latitude: number;
  longitude: number;
};

export type Weather = {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
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
  const setCurrentWeather = useWeatherStore((state) => state.setCurrentWeather);
  const setDailyForecast = useWeatherStore((state) => state.setDailyForecast);

  const [location, setLocation] = useState<Location>({
    latitude: 16.8409,
    longitude: 96.1735,
  });
  const [loading, setLoading] = useState(false);
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

    getPermission();
  }, []);

  const getWeather = async () => {
    const weather = await getWeatherInfo(location.latitude, location.longitude);
    setCurrentWeather({
      temperature: weather.current_weather.temperature,
      weatherCode: weather.current_weather.weathercode,
      windspeed: weather.current_weather.windspeed,
    });
    setDailyForecast({
      sunrise: weather.daily.sunrise,
      sunset: weather.daily.sunset,
      temperature_2m_max: weather.daily.temperature_2m_max,
      time: weather.daily.time,
      weathercode: weather.daily.weathercode,
    });
  };

  const getReverseGeocode = async () => {
    const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
      latitude: location.latitude,
      longitude: location.longitude,
    });
    setCity(
      reverseGeocodeResponse[0].city! || reverseGeocodeResponse[0].country!
    );
  };

  useEffect(() => {
    setLoading(true);
    getWeather();
    getReverseGeocode();
    setLoading(false);
  }, [location]);

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
