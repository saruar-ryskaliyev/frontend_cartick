import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 animate-shimmer"></div>
      <main className="flex flex-col items-center text-white mt-12 w-full max-w-3xl px-4 relative z-10">
        <h1 className="text-3xl font-bold mb-8">Найди заряженную машину для себя!</h1>
        <div className="bg-white p-4 rounded-md shadow-md w-full">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
            <input 
              type="text" 
              placeholder="Найди мне Toyota Land Cruiser Prado в городе Алматы" 
              className="border border-gray-300 rounded-md p-2 flex-grow w-full bg-transparent text-gray-700 placeholder-gray-500" 
            />
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-gray-300 text-black px-4 py-2 rounded-md w-full">Поиск</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
