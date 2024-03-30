import React from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import "./index.css";
import { useTypewriter } from "react-simple-typewriter";

const App: React.FC = () => {
  const [typeEffect] = useTypewriter({
    words: ["날씨바바"],
    loop: 1,
    typeSpeed: 200,
  });
  const [typeEffectt] = useTypewriter({
    words: ["* 바바 : 걱정이 없는 사람"],
    loop: 1,
    typeSpeed: 300,
  });
  return (
    <div className="m-0 p-0 justify-center  flex bg-[url('/public/images/sky1.jpg')] bg-cover min-h-[2000px]">
      <div>
        <h1 className="text-[100px] font-bold font-['YEONGJUSeonbiTTF'] flex justify-center items-center text-white h-[150px] max-sm:text-[70px]">{typeEffect}</h1>
        <div className=" flex justify-center items-center font-['YEONGJUSeonbiTTF'] text-white text-[10px] mb-[30px] h-[10px]">
          <span>{typeEffectt}</span>
        </div>
        <SearchBar />
        <CurrentWeather />
        <ForecastList />
      </div>
    </div>
  );
};

export default App;
