import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 animate-shimmer"></div>
      <main className="flex flex-col items-center text-white mt-12 w-full max-w-3xl px-4 relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Как CarTick поможет вам найти автомобиль вашей мечты?</h2>
          <p className="mb-4">
            CarTick - это платформа, созданная для того, чтобы помочь вам найти идеальный автомобиль. С помощью нашего удобного поиска и фильтров вы сможете быстро найти машины, соответствующие вашим требованиям и пожеланиям.
          </p>
          <p className="mb-4">
            Введите марку и модель автомобиля, например, &quot;Toyota Land Cruiser Prado&quot;, укажите город, где вы хотите искать, и нажмите &quot;Поиск&quot;. Наш сервис предоставит вам список доступных автомобилей, которые соответствуют вашим критериям.
          </p>
          <p>
            CarTick позволяет вам сравнивать цены, характеристики и отзывы, чтобы вы могли сделать осознанный выбор и найти машину своей мечты. Мы работаем с проверенными продавцами, чтобы гарантировать вам надежность и качество.
          </p>
     
      </main>
    </div>
  );
}

export default Home;
