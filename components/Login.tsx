'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Login = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    router.push('/chat'); 
    
  };
  return (
    <form className="max-w-xl mx-auto border rounded-l-3xl rounded-t-3xl p-10 mt-32 bg-gray-200" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-semibold text-center">Zaloguj się do Chatu</h2>
      
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="mb-5 border rounded-lg px-3 py-2 mt-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base">Zaloguj</button>
    </form>
  );
};

export default Login;