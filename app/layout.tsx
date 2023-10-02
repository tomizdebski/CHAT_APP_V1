import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SocketContextProvider } from "@/context/SocketContext";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

const test: string = "test";

export const metadata: Metadata = {
  title: "Chat Next App",
  description: "Realtime chat app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocketContextProvider>
          <Navbar />
          {children}
          </SocketContextProvider>
      </body>
    </html>
  );
}
