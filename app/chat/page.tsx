'use client'
import Image from 'next/image'
import socketIO from 'socket.io-client';
import { useContext, useState, useEffect } from "react";
import ChatBar from '@/components/ChatBar';
import ChatBody from '@/components/ChatBody';
import ChatFooter from '@/components/ChatFooter';

 const socket = socketIO('http://localhost:4000');

export default function Chat() {

  //const [messages, setMessages] = useState([]);

 

 
  

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter socket={socket}/>
      </div>
    </div>
  )
}
