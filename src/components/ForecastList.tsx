import React from "react";
import createWeatherStore from "../store/weatherStore";

const ForecastList: React.FC = () => {
  const forecast = createWeatherStore((state) => state.forecast);

  // if (!forecast.length) {
  //   return <div>날씨 예측 불가</div>;
  // }
  if (!forecast.length) {
    return null;
  }

  return (
    <div>
      <h2 className="flex justify-center items-center text-[30px] font-['YEONGJUSeonbiTTF'] text-white">시간대별 날씨</h2>
      <div className="flex justify-center items-center">
        <ul>
          {forecast.map((item) => (
            <li key={item.date} className="flex justify-center items-center">
              <div className="text-white font-['YEONGJUSeonbiTTF'] flex justify-center items-center">{item.date}</div>
              <img src={item.icon} alt="Weather Icon" />
              <div className="text-white font-['YEONGJUSeonbiTTF'] flex justify-center items-center">{item.temperature}°C</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForecastList;
