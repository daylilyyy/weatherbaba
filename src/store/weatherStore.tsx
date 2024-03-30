import create from "zustand";
import { WeatherState, Weather, Forecast } from "./types";
import { getCurrentWeather, getForecast } from "../utils/weatherAPI";
import { AxiosError } from "axios";

const createWeatherStore = create<WeatherState>((set) => ({
  currentWeather: null,
  forecast: [],
  searchCity: (city: string) =>
    new Promise<void>((resolve, reject) => {
      getCurrentWeather(city)
        .then((weather) => {
          set({ currentWeather: weather });
          return getForecast(city);
        })
        .then((forecast) => {
          set({ forecast });
          resolve();
        })
        .catch((error: AxiosError) => {
          if (error.response) {
            console.error("Server responded with non-success status:", error.response.status);
          } else if (error.request) {
            console.error("No response received from server:", error.request);
          } else {
            console.error("Error setting up the request:", error.message);
          }
          reject(error);
        });
    }),

  setCurrentWeather: (weather: Weather) => set({ currentWeather: weather }),
  setForecast: (forecast: Forecast[]) => set({ forecast }),
}));

export default createWeatherStore;
