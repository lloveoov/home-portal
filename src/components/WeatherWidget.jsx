import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Default to Shanghai/China (can be changed to user location or IP based)
  const LAT = 31.2304; 
  const LON = 121.4737; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );
        setWeather(response.data.current);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh every 30 mins
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code) => {
    if (code <= 1) return <Sun className="w-12 h-12 text-yellow-500" />;
    if (code <= 3) return <Cloud className="w-12 h-12 text-gray-400" />;
    if (code <= 67) return <CloudRain className="w-12 h-12 text-blue-400" />;
    return <Cloud className="w-12 h-12 text-gray-400" />;
  };

  const getWeatherDescription = (code) => {
     if (code === 0) return "Clear sky";
     if (code === 1) return "Mainly clear";
     if (code === 2) return "Partly cloudy";
     if (code === 3) return "Overcast";
     if (code >= 45 && code <= 48) return "Fog";
     if (code >= 51 && code <= 55) return "Drizzle";
     if (code >= 61 && code <= 65) return "Rain";
     return "Unknown";
  };

  if (loading) return (
    <div className="dashboard-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between h-full border border-gray-100 animate-pulse">
        <div className="flex items-center justify-between mb-4">
            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
        </div>
        <div className="h-24 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="dashboard-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between h-full border border-gray-100 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
         {getWeatherIcon(weather.weather_code)}
      </div>

      <div className="flex items-center justify-between mb-6 z-10">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
           <Sun className="w-5 h-5 text-orange-500" />
           Weather
        </h2>
        <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
           Shanghai
        </span>
      </div>
      
      {weather && (
        <div className="flex flex-col z-10">
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-black text-gray-900 tracking-tight leading-none">{Math.round(weather.temperature_2m)}°</span>
                <span className="text-xl font-medium text-gray-400">C</span>
            </div>
            
            <div className="text-lg text-gray-600 font-medium mb-4 flex items-center gap-2">
                 {getWeatherDescription(weather.weather_code)}
            </div>

            <div className="border-t border-gray-100 pt-4 mt-auto grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Humidity</span>
                    <div className="flex items-center gap-1 text-gray-700 font-bold">
                        <CloudRain className="w-4 h-4 text-blue-400" />
                        {weather.relative_humidity_2m}%
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Wind</span>
                    <div className="flex items-center gap-1 text-gray-700 font-bold">
                        <Wind className="w-4 h-4 text-gray-400" />
                        {weather.wind_speed_10m} <span className="text-xs font-normal text-gray-500">km/h</span>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
