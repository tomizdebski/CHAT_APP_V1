"use client";
import Image from "next/image";
import socketIO from "socket.io-client";
import { useContext, useState, useEffect, useRef } from "react";
import ChatBar from "@/components/ChatBar";
import ChatBody from "@/components/ChatBody";
import ChatFooter from "@/components/ChatFooter";
import { IMessage } from "@/types/types";
import { SocketContext } from "@/context/SocketContext";

export default function Chat() {

 
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const { socket, setSocket } = useContext(SocketContext) as any;

  

  useEffect(() => {
    function fetchMessages() {
      fetch(process.env.NEXT_PUBLIC_URL_API + "/api" as string)
        .then((response) => response.json())
        .then((data) => setMessages(data.messages));
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data: IMessage) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);

  useEffect(() => {
    //scroll to last message
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  console.log(messages);

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
        />
        <ChatFooter />
      </div>
    </div>
  );
}
