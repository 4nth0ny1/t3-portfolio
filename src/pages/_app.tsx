import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(!loading), 500);
  }, []);

  return (
    <SessionProvider session={session}>
      {!loading ? (
        <div className="flex h-screen w-full flex-col justify-center bg-black">
          <h1 className="text-center text-5xl text-[#E3E3E3]">😊</h1>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="h-full w-full bg-[#0b0b0b] opacity-90">
            <div className="py-14">
              <Navbar />
              <Component {...pageProps} />
            </div>
          </div>
        </motion.div>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
