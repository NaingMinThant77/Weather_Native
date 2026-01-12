import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const QrCode = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header Section */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
        <Pressable className="flex-row items-center" hitSlop={20}>
          <Link href={"/"}>
            <Ionicons name="chevron-back" size={28} color="black" />
          </Link>
          <Text className="text-lg font-semibold ml-1">Home</Text>
        </Pressable>
      </View>

      {/* Main Content with Background */}
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="flex-1"
        blurRadius={10}
        resizeMode="cover"
      >
        <View className="flex-1 items-center justify-center bg-black/10 px-8">
          <View className="bg-white p-6 rounded-3xl shadow-xl shadow-black/50 mb-6">
            <Image
              source={require("../assets/scan-me.png")}
              style={{ width: 240, height: 320 }}
              resizeMode="contain"
            />
          </View>

          {/* Labeling */}
          <View className="bg-white/80 px-6 py-2 rounded-full border border-white/40">
            <Text className="text-center text-slate-800 font-medium text-base">
              Demo Weather App — Marco
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QrCode;
