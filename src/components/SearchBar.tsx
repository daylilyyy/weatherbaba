import React, { useState } from "react";
import createWeatherStore from "../store/weatherStore";
import { ImSearch } from "react-icons/im";

const SearchBar: React.FC = () => {
  const [city, setCity] = useState("");
  const searchCity = createWeatherStore((state) => state.searchCity);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city.trim()) {
      alert("날씨정보를 원하는 도시명을 입력해주세요");
      return;
    }

    try {
      await searchCity(city.trim());
      setCity("");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[80vw] justify-center items-center">
      <input type="text" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} className="w-[300px] mr-1  h-[50px] border-2 border-white rounded pl-[10px] outline-none" />
      <button type="submit" className=" bg-white w-[100px] h-[50px] rounded text-[25px] flex justify-center items-center">
        <ImSearch className="text-[#FBB9AB]" />
      </button>
    </form>
  );
};

export default SearchBar;
