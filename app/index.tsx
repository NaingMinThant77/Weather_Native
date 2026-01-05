import {
  Alert,
  ImageBackground,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useWeatherStore } from "../store/weather-store";
import { getLocationByCity, getWeatherInfo } from "../utils/weather-api";

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

  // const [location, setLocation] = useState<Location>({
  //   latitude: 16.8409,
  //   longitude: 96.1735,
  // });
  const { latitude, longitude, setLocation } = useWeatherStore();

  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<string>("Yangon");
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    // Getting Device Location Permission
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Please grant location permission to use this app."
        );
        return;
      }

      setHasPermission(true);

      const currentLocation = await Location.getCurrentPositionAsync({});
      // setLocation({
      //   latitude: currentLocation.coords.latitude,
      //   longitude: currentLocation.coords.longitude,
      // });
      setLocation(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
    };

    getPermission();
  }, []);

  const getWeather = async () => {
    if (!hasPermission) return;
    if (latitude === 0 && longitude === 0) return;

    setLoading(true);

    try {
      // Fetch Weather
      const weather = await getWeatherInfo(latitude, longitude);
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

      // Fetch Geocode (Address)
      const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // Safety check for undefined address
      if (reverseGeocodeResponse && reverseGeocodeResponse.length > 0) {
        setCity(
          reverseGeocodeResponse[0].city ||
            reverseGeocodeResponse[0].region ||
            reverseGeocodeResponse[0].country ||
            "Unknown Location"
        );
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      // Optional: don't alert purely on network fail to avoid spamming user
    } finally {
      setLoading(false);
    }
  };

  const searchLocationByCity = async (cityInput: string) => {
    try {
      setLoading(true);
      const { latitude, longitude } = await getLocationByCity(cityInput);
      setLocation(latitude, longitude);
      setCity(cityInput); // Optimistically update city name
    } catch (error) {
      Alert.alert("Error", "Please enter a valid city name.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude, hasPermission]);

  return (
    <SafeAreaView className="bg-white">
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={10}
      >
        <View className="px-6">
          {loading ? (
            <View className="items-center justify-center">
              <ActivityIndicator size="large" color="#ffffff" />
              <Text className="text-secondaryDark mt-4 font-semibold text-lg">
                Fetching weather data...
              </Text>
            </View>
          ) : (
            <>
              <Header cityName={city} />
              <InputBox serchLocationByCity={searchLocationByCity} />
              <Content />
              <Info />
              <Text className="text-center text-secondaryDark text-sm my-8">
                Demo Weather App - CODE HUB
              </Text>
            </>
          )}
        </View>
        <StatusBar barStyle={"dark-content"} />
      </ImageBackground>
    </SafeAreaView>
  );
}
