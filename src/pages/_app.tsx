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
    setTimeout(() => setLoading(!loading), 3000);
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
          <Navbar />
          <Component {...pageProps} />
        </motion.div>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
