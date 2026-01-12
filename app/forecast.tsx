import { ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/forecast/header";
import Today from "../components/forecast/today";
import Info from "../components/home/info";
import WList from "../components/forecast/w-list";

const Forecast = () => {
  return (
    <SafeAreaView className="bg-white">
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-6 flex-1">
          <Header />
          <Today />
          <Info />
          <WList />
          <Text className="text-center text-secondaryDark text-sm -mt-5">
            Demo Weather App - Marco
          </Text>
        </View>
        <StatusBar barStyle={"dark-content"} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Forecast;
