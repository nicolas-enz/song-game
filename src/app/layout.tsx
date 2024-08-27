import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Playlist Game",
  description: "Adivina la cancion de tu playlist.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-slate-700 dark:text-white container mx-auto flex flex-col h-screen justify-between overflow-y-scroll">
        <Providers>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
