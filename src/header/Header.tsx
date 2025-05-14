import Nav from "./Nav";
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { Thermometer, Loader } from "lucide-react";

function Header() {
  const [imgURL, setImageURL] = useState();
  const [temp, setTemp] = useState();
  const [station, setStation] = useState(6);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://www.met.ie/Open_Data/xml/obs_present.xml"
        );
        const parser = new XMLParser();

        const jsonObj = parser.parse(response.data);

        const weather_img_url = jsonObj?.observations?.station[station]?.symbol;
        const temp = jsonObj?.observations?.station[station]?.temp;
        weather_img_url && setImageURL(weather_img_url);
        console.log(weather_img_url);
        temp && setTemp(temp);
      } catch (error) {
        console.log("hello error: ", error);
      }
    };
    fetchWeather();
  }, [station]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStation(Number(e.target.value));
  };
  return (
    <>
      <div className="flex justify-between items-center lg:ml-40 lg:mr-40 mt-4 ml-2  max-w-full sm:ml-2  sm:mr-2    ">
        <img src={logo} alt="" width={40} />
        {imgURL ? (
          <div className="flex gap-3">
            <img src={`/${imgURL}`} width={40} />
            <select
              defaultValue={"6"}
              onChange={(e) => {
                handleSelect(e);
              }}
            >
              <option value="1">Athnery</option>
              <option value="2">Ballyhaise</option>
              <option value="3">Belmullet</option>
              <option value="5">Claremorris</option>
              <option value="6">Cork</option>
              <option value="7">Dublin</option>
              <option value="8">Dunsany</option>
            </select>
            <div className="flex items-center gap-1">
              <Thermometer color="yellow" />
              <p>{`${temp}°C`}</p>
            </div>
          </div>
        ) : (
          <Loader className="flex items-center" />
        )}
        <Nav />
      </div>
    </>
  );
}

export default Header;
