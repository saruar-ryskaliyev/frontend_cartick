'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    router.push('/');
  };

  return (
    <header className="w-full p-4 flex justify-between items-center bg-white shadow-md">
      <nav className="flex space-x-4">
        <Link href="/" className="text-blue-700">
          Главная
        </Link>
        <Link href="/search" className="text-blue-700">
          Поиск
        </Link>
      </nav>
      <h1 className="font-bold text-xl text-purple-700">CarTick</h1>
      <div className="flex space-x-4">
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Войти
        </Link>
        <button 
          onClick={handleLogout} 
          className="bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Выйти
        </button>
      </div>
    </header>
  );
}

export default Header;
