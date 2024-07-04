'use client'
import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useRouter } from 'next/navigation';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin
        ? { email, password }
        : { email, username, password };

      const response = await axiosInstance.post(endpoint, payload);
      if (response.data.accessToken) {
        localStorage.setItem('jwtToken', response.data.accessToken);
        router.push('/');
      }
    } catch (err) {
      setError('Error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
      <div className="relative w-full max-w-md mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-black">{isLogin ? 'Login' : 'Register'}</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="mb-4 p-2 w-full border rounded text-black"
            />
            {!isLogin && (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="mb-4 p-2 w-full border rounded text-black"
              />
            )}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="mb-4 p-2 w-full border rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
              disabled={loading}
            >
              {loading ? 'Submitting...' : isLogin ? 'Login' : 'Register'}
            </button>
            <p className="mt-4 text-center text-black">
              {isLogin ? 'No account?' : 'Already have an account?'}
              <button type="button" onClick={toggleForm} className="ml-2 text-blue-700">
                {isLogin ? 'Register here' : 'Login here'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
