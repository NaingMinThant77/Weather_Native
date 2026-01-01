import React from "react";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Theme } from "../../theme";

const Info = () => {
  return (
    <View className="flex-row items-center justify-center my-2 gap-3 mx-auto">
      <View className="flex-1 items-center bg-white shadow rounded-3xl p-4">
        <Feather name="sunrise" size={24} color="black" />
        <Text className="text-purpleDark font-bold text-lg">6:00</Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunrise</Text>
      </View>
      <View className="flex-1 items-center bg-white shadow rounded-3xl p-4">
        <MaterialCommunityIcons
          name="weather-rainy"
          size={24}
          color={Theme.skyBlue}
        />
        <Text className="text-purpleDark font-bold text-lg">84%</Text>
        <Text className="text-lg text-secondaryDark font-bold">Rain</Text>
      </View>
      <View className="flex-1 items-center bg-white shadow rounded-3xl p-4">
        <Feather name="sunset" size={24} color="black" />
        <Text className="text-purpleDark font-bold text-lg">5:00</Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunset</Text>
      </View>
    </View>
  );
};

export default Info;
