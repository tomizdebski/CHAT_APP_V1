'use client'

import {createContext, useState} from "react";

export const SocketContext = createContext({});

export function SocketContextProvider({children}: {children: React.ReactNode}) {
  const [socket,setSocket] = useState([]);
  return (
    <SocketContext.Provider value={{socket,setSocket}}>
      {children}
    </SocketContext.Provider>
  );
}