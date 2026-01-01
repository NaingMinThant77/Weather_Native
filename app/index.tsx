import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//style={{ paddingTop: Platform.OS === "android" ? "24" : "0" }}
export default function Index() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/icon.png")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8">
          <Text>Weather Native</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
