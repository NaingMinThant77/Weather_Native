import { Weather } from "../App";

export const getWeatherInfo = async (latitude: number, longitude: number) => {
  const weather_api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
  const response = await fetch(weather_api);
  const response_data: Weather = await response.json();
  return response_data;
};
