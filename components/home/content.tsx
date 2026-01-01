import React from "react";
import { Image, Text, View } from "react-native";

const Content = () => {
  return (
    <View className="justify-center items-center mb-6 mt-4">
      <Image source={require("../../assets/storm.png")} className="w-60 h-60" />
      <View className="relative">
        <Text className="text-[8rem] font-extrabold">24</Text>
        <Text className="absolute top-0 -right-6 text-7xl">°</Text>
      </View>
      <Text className="text-4xl font-medium text-secondaryDark">
        Thunderstorm
      </Text>
    </View>
  );
};

export default Content;
