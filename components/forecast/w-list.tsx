import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import WItem from "./w-item";

export type Weather = {
  day: string;
  weather: string;
  temp: string;
};

const DummyWeathers: Weather[] = [
  {
    day: "Mon",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Tue",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Wed",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Thu",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Fri",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Sat",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Sun",
    weather: "Sunny",
    temp: "26°",
  },
];

const WList = () => {
  const [forecastData, setForecastData] = useState(DummyWeathers);
  return (
    <View className="flex-1">
      <Text className="text-2xl font-bold mt-3 ms-3">7 DAYS FORECAST</Text>
      <FlatList
        data={forecastData}
        renderItem={({ item }) => <WItem w={item} />}
        keyExtractor={(item) => item.day}
        className="m-4"
      />
    </View>
  );
};

export default WList;
