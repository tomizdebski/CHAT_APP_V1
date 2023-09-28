"use client";
import Image from "next/image";
import socketIO from "socket.io-client";
import { useContext, useState, useEffect } from "react";
import ChatBar from "@/components/ChatBar";
import ChatBody from "@/components/ChatBody";
import ChatFooter from "@/components/ChatFooter";
import { IMessage } from "@/types/types";
import Login from "@/components/Login";

const socket = socketIO("http://localhost:4000");

export default function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const user = localStorage.getItem("userName");
  console.log(user);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  console.log(messages);

  if (user === null) {
    return <Login socket={socket}/>;
  }

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
}
