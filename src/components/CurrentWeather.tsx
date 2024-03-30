import React from "react";
import createWeatherStore from "../store/weatherStore";

const CurrentWeather: React.FC = () => {
  const currentWeather = createWeatherStore((state) => state.currentWeather);

  // if (!currentWeather) {
  //   return <div className="flex justify-center items-center border-t">원하는 도시를 입력하세요</div>;
  // }
  if (!currentWeather) {
    return null;
  }

  const { city, temperature, description, icon } = currentWeather;

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-[500%] text-white font-['YEONGJUSeonbiTTF'] max-md:text-[250%] max-sm:text-[200%]">{city}</h2>
      <div className="flex justify-center items-center">
        <img src={icon} alt="Weather Icon" className="w-[70px] mr-5" />
        <p className="text-white font-['YEONGJUSeonbiTTF'] mr-5">{temperature}°C</p>
        <p className="text-white font-['YEONGJUSeonbiTTF']">{description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
