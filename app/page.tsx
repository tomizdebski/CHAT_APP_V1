"use client";
import Image from "next/image";
import socketIO from "socket.io-client";
import { useContext, useState, useEffect } from "react";
import { SocketContext } from "@/context/SocketContext";
import { IMessage } from "@/types/types";
import Login from "@/components/Login";

//const socket = socketIO("http://localhost:4000");

export default function Home() {

 
  const { socket, setSocket } = useContext(SocketContext) as any;

  useEffect(() => {
    const socket = socketIO("http://localhost:4000");
    setSocket(socket);
  }, []);

  return <Login />;
}
