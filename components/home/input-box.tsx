import React from "react";
import { Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Theme } from "../../theme";

const InputBox = () => {
  return (
    <View className="relative">
      <TextInput
        placeholder="City Name"
        className="bg-white shadow rounded-3xl p-6 mb-4s ps-14 placeholder:font-bold placeholder:text-secondaryDark"
      />
      <MaterialCommunityIcons
        name="cloud-search-outline"
        size={26}
        color={Theme.secondaryDark}
        className="absolute top-4 left-4"
      />
    </View>
  );
};

export default InputBox;
