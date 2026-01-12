import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useWeatherStore } from "../../store/weather-store";
import { WeatherDetail } from "../home/content";
import { getWeratherInfoByCode } from "../../utils";

const Today = () => {
  const weatherCode = useWeatherStore(
    (state) => state.current_weather
  ).weathercode;
  const temperature = useWeatherStore(
    (state) => state.current_weather
  ).temperature;
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetail>();

  useEffect(() => {
    setWeatherDetail(getWeratherInfoByCode(weatherCode));
  }, [weatherDetail]);

  return (
    <View className="flex-row my-2  gap-10">
      <Image source={weatherDetail?.image} className="w-40 h-40 ms-10" />
      <View>
        <Text className="text-xl font-bold my-2">Today</Text>
        <Text className="text-7xl font-bold text-purpleDark">
          {temperature.toFixed()}°
        </Text>
        <Text className="text-xl text-secondaryDark font-bold mt-1">
          {weatherDetail?.label}
        </Text>
      </View>
    </View>
  );
};

export default Today;
