"use client";
import socketIO from "socket.io-client";
import { useContext, useState, useEffect } from "react";
import { SocketContext } from "@/context/SocketContext";
import Login from "@/components/Login";

//const socket = socketIO("http://localhost:4000");

export default function Home() {

 
  const { socket, setSocket } = useContext(SocketContext) as any;

  useEffect(() => {
    const socket = socketIO(process.env.NEXT_PUBLIC_URL_API as string);
    setSocket(socket);
  }, []);

  return <Login />;
}
