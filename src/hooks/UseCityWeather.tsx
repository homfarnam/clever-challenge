import axios from 'axios';
import { useEffect, useState } from 'react';

const UseCityWeather = <T,>(city: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (cityName: string) => {
    setLoading(true);
    await axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=${process.env.REACT_APP_WEATHER_TOKEN}&contentType=json`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (city) {
      fetchData(city);
    }
  }, [city]);

  return { data, error, loading };
};

export default UseCityWeather;
