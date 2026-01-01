import { ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";

//style={{ paddingTop: Platform.OS === "android" ? "24" : "0" }}
export default function Index() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8">
          <Header />
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
