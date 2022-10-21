import React, { createContext, useState } from 'react';

const initialState = {
  city: '',
  setCity: () => {},
};

interface initialStateType {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const WeatherContext = createContext<initialStateType>(initialState);

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState('');

  return <WeatherContext.Provider value={{ setCity, city }}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
