import { ScrollView, View } from "react-native";
import WItem from "./w-item";
import { useWeatherStore } from "../../store/weather-store";
import { DAYS, getWeratherInfoByCode } from "../../utils";

export type Weather = {
  day: string;
  weather: string;
  temp: string;
};

const WList = () => {
  const dailyForecast = useWeatherStore((state) => state.daily);

  return (
    <ScrollView>
      <View className="flex-1">
        {dailyForecast.weathercode.map((code, index) => {
          const temperature = dailyForecast.temperature_2m_max[index];
          const date = new Date(dailyForecast.time[index]);
          const dayOfWeek = DAYS[date.getDay()];
          const condition = getWeratherInfoByCode(code)?.label;
          const img = getWeratherInfoByCode(code)?.image;

          return (
            <WItem
              key={index}
              temp={temperature}
              day={dayOfWeek}
              weatherCodition={condition!}
              wImage={img}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WList;
