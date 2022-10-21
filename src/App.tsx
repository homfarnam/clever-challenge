import React, { useContext, useState } from 'react';
import { WeatherBox } from './components';
import { WeatherContext } from './context/provider';

function App() {
  const [search, setSearch] = useState('');
  const { city } = useContext(WeatherContext);

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-10 py-10'>
        <h1 className='flex items-start justify-center text-2xl font-medium text-white'>
          Weather App
        </h1>
      </div>
      <div className='flex items-center justify-around w-full'>
        <div className='text-white'>
          <p>{city ? city : ''}</p>
        </div>
        <div>
          <input
            type='text'
            className='px-3 py-2 text-black bg-white rounded-lg'
            placeholder='Search city'
            onChange={handleSearch}
            onKeyDown={(e) => {
              if (e.code.toLowerCase() === 'enter') {
                setShowDetails(true);
              }
            }}
            value={search}
          />
        </div>
      </div>
      {showDetails && <WeatherBox cityName={search} />}
    </div>
  );
}

export default App;
