export interface Weather {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

export interface Forecast {
  date: string;
  temperature: number;
  icon: string;
}

export interface WeatherState {
  currentWeather: Weather | null;
  forecast: Forecast[];
  searchCity: (city: string) => void;
  setCurrentWeather: (weather: Weather) => void;
  setForecast: (forecast: Forecast[]) => void;
}

export interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}
