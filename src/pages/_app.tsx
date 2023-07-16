import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(!loading), 1000);
  }, []);

  return (
    <SessionProvider session={session}>
      {!loading ? (
        <div className="flex h-screen w-full flex-col justify-center bg-black">
          <h1 className="text-4xl text-[#E3E3E3]">Hello, I am Anthony.</h1>
        </div>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

// sequence
/*
black screen text
h1 is typed 
Then h2s appear
change text 
then background fades to another color
website components fade in
*/
