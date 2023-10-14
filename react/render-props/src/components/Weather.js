import { useEffect, useState } from "react";

const Weather = ({ location, render }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [temp, setTemp] = useState(0);
  const [con, setCon] = useState([]);
  const [icon, setIcon] = useState("");
  const [place, setPlace] = useState("");

  const fetchWeather = (location) => {
    setIsLoading(true);
    fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${location}`
    )
      .then((res) => res.json())
      .then(({ current, location }) => {
        const { temperature, weather_descriptions, weather_icons } = current;
        const { name, country } = location;
        setTemp(temperature);
        console.log(temperature);
        setCon(weather_descriptions);
        console.log(weather_descriptions);
        setIcon(weather_icons);
        console.log(weather_icons);
        setPlace(`${name}, ${country}`);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  return render({ error, isLoading, temp, con, icon, place });
};

export default Weather;
