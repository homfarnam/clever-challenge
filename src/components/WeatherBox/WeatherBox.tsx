import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../context/provider';
import UseCityWeather from '../../hooks/UseCityWeather';
import { WeatherTypes } from '../../types/types';
import { convertToWeekDay } from '../../utils/utils';
import { IoMdSnow } from 'react-icons/io';

interface WeatherBoxProps {
  cityName: string;
}

const WeatherBox = ({ cityName }: WeatherBoxProps) => {
  const [farInput, setFarInput] = useState<string>('');

  const { data, loading } = UseCityWeather<WeatherTypes>(cityName);

  const { setCity } = useContext(WeatherContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFarInput(value);
  };

  // 🟢 Formula: (F − 32) × 5/9 = C

  const convertToCel = (far: string): string => {
    const convertedData = ((Number(far) - 32) * (5 / 9)).toFixed(2);

    return convertedData;
  };

  const celsius = convertToCel(farInput);

  useEffect(() => {
    if (data) {
      console.log({ data });
      setCity(data.resolvedAddress);
    }
  }, [data, setCity]);

  const day = convertToWeekDay(data?.currentConditions.datetimeEpoch!);

  return (
    <>
      {loading ? (
        <div>
          <p>loading ...</p>
        </div>
      ) : (
        data && (
          <div className='w-3/12 h-[300px] flex flex-col justify-around px-2 py-2 mx-auto mt-20 bg-[#B4CEE2] text-black border border-white rounded-xl'>
            <div className='flex items-center justify-between px-2 py-2 text-lg font-semibold'>
              <p> {day}</p>
              <p>{data.currentConditions.datetime}</p>
            </div>
            <div className='flex items-center justify-center space-x-3 text-2xl font-bold'>
              <h3
                style={{
                  color: data.currentConditions.temp > 70 ? 'red' : 'green',
                }}>
                {data.currentConditions.temp}
              </h3>
              <IoMdSnow
                size={50}
                style={{
                  color: data.currentConditions.temp > 70 ? 'red' : 'green',
                }}
              />
            </div>

            {/* input */}
            <div className='flex items-center justify-center w-full mx-auto my-5'>
              <input
                type='text'
                className='w-11/12 px-2 py-2 rounded-lg'
                placeholder='Enter Fahrenheit value to convert to the Celsius'
                value={farInput}
                onChange={handleInput}
              />
            </div>

            {/* button */}
            <div className='flex items-center justify-center w-full'>
              <button className='w-10/12 p-3 text-white bg-black rounded-lg'>Convert</button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default WeatherBox;
