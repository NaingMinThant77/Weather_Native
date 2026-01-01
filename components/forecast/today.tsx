import React from "react";
import { Image, Text, View } from "react-native";

const Today = () => {
  return (
    <View className="flex-row my-2  gap-10">
      <Image
        source={require("../../assets/storm.png")}
        className="w-40 h-40 ms-10"
      />
      <View>
        <Text className="text-xl font-bold my-2">Today</Text>
        <Text className="text-7xl font-bold text-purpleDark">26°</Text>
        <Text className="text-xl text-secondaryDark font-bold mt-1">
          Thunderstorm
        </Text>
      </View>
    </View>
  );
};

export default Today;
