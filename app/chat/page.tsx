'use client'
import Image from "next/image";
import socketIO from "socket.io-client";
import { useContext, useState, useEffect } from "react";
import ChatBar from "@/components/ChatBar";
import ChatBody from "@/components/ChatBody";
import ChatFooter from "@/components/ChatFooter";
import { IMessage } from "@/types/types";
import { SocketContext } from "@/context/SocketContext";




export default function Chat() {
  
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { socket, setSocket } = useContext(SocketContext) as any;

  const user = localStorage.getItem("userName");
  console.log(user);

  useEffect(() => {
    socket.on("messageResponse", (data: IMessage) => setMessages([...messages, data]));
  }, [socket, messages]);

  console.log(messages);


  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter />
      </div>
    </div>
  );
}