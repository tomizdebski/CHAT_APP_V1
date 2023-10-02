"use client";
import React, { useState, useContext } from "react";
import { SocketContext } from "@/context/SocketContext";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInButton = () => {
    const { socket, setSocket } = useContext(SocketContext) as any;
   const router = useRouter();
    const userName = "tomaszzzzzzzz"; ///////////////test

  return (
    <button
      className="w-full mt-5 flex items-center justify-center gap-2 rounded-l-3xl rounded-t-3xl bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white ring-blue-300 transition duration-100 hover:bg-blue-600 md:text-base"
      onClick={(event) => {
       event.preventDefault();
        signIn("github");
        socket.emit("newUser", { userName, socketID: socket.id });
      }}
      type="button"
    >
      Zaloguj przez GitHub
    </button>
  );
};

export default SignInButton;
