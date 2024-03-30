import axios from "axios";
import { Weather, Forecast, ForecastItem } from "../store/types";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY || "7b5befaa8bac50c7313c361e5b54fbf5";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city: string): Promise<Weather> => {
  const response = await axios.get(`${API_BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  const { name, weather, main } = response.data;
  const { description, icon } = weather[0];

  return {
    city: name,
    temperature: main.temp,
    description,
    icon: `http://openweathermap.org/img/w/${icon}.png`,
  };
};

export const getForecast = async (city: string): Promise<Forecast[]> => {
  const response = await axios.get(`${API_BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  const { list } = response.data;

  return list.map((item: ForecastItem) => ({
    date: item.dt_txt,
    temperature: item.main.temp,
    icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
  }));
};
