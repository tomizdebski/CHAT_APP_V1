"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SocketContext } from "@/context/SocketContext";
import SignInButton from "./SignInButton";


const Login = () => {

  const [userName, setUserName] = useState("");
  const router = useRouter();
  const { socket, setSocket } = useContext(SocketContext) as any;
 



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    router.push("/chat");
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/images/chatting-bg.jpg')] bg-cover">
      <form
        className="max-w-xl mx-auto border-2 border-blue-600 rounded-l-3xl rounded-t-3xl p-10 mt-32 bg-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-semibold text-center">
          Zaloguj się do Chatu
        </h2>

        <input
          type="text"
          
          name="username"
          id="username"
          className="mb-5 border rounded-l-3xl rounded-t-3xl px-3 py-3 mt-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="w-full flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base">
          Zaloguj
        </button>
        <SignInButton />

      </form>
    </main>
  );
};

export default Login;
