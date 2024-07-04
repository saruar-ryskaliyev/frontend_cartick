'use client'

import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

interface Car {
  _id: string;
  name: string;
  price: string;
  link: string;
  description: string;
  region: string;
  date: string;
  photos: string[];
  generation: string;
  bodyType: string;
  engineVolume: string;
  mileage: string;
  transmission: string;
  driveType: string;
  steeringWheel: string;
  color: string;
  customsCleared: string;
}

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setLoading(true);
    try {
      const token = localStorage.getItem('jwtToken');
      const endpoint = token 
        ? `/api/cars/search/gemini?q=${encodeURIComponent(searchQuery)}` 
        : `/api/cars/search/guest?q=${encodeURIComponent(searchQuery)}`;
      
      const response = await axiosInstance.get(endpoint);
      setCars(response.data);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 animate-shimmer"></div>
      <main className="flex flex-col items-center text-white mt-12 w-full max-w-3xl px-4 relative z-10">
        <h1 className="text-3xl font-bold mb-8">Найди заряженную машину для себя!</h1>
        <div className="bg-white p-4 rounded-md shadow-md w-full">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Найди мне Toyota Land Cruiser Prado в городе Алматы" 
              className="border border-gray-300 rounded-md p-2 flex-grow w-full bg-transparent text-gray-700 placeholder-gray-500" 
            />
            <button 
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? 'Поиск...' : 'Поиск'}
            </button>
          </form>
        </div>
        {searchPerformed && (
          <div className="bg-white p-4 rounded-md shadow-md w-full mt-8 text-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Результаты поиска</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cars.map((car) => (
                <div key={car._id} className="border p-4 rounded-md shadow-md">
                  <img src={car.photos[0]} alt={car.name} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <p className="text-gray-700 mb-2">{car.price}</p>
                  <p className="text-gray-700 mb-2">{car.region}</p>
                  <a href={car.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Подробнее</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
