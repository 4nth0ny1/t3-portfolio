import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setText(!text);
    }, 3000);
  }, []);

  return (
    <div className="flex h-[850px] flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl text-[#E3E3E3]">Hello, I am Anthony.</h1>
        <div className="flex flex-row gap-4 ">
          <p className="text-4xl text-[#999999]">I</p>
          {!text ? (
            <h2 className="text-4xl text-[#999999]">create</h2>
          ) : (
            <AnimatePresence>
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4xl text-[#999999]"
              >
                help
              </motion.h2>
            </AnimatePresence>
          )}
        </div>
        <div className="flex flex-row gap-4">
          {!text ? (
            <h2 className="text-4xl text-[#999999]">strong</h2>
          ) : (
            <AnimatePresence>
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4xl text-[#999999]"
              >
                weak
              </motion.h2>
            </AnimatePresence>
          )}
          <p className="text-4xl text-[#999999]">brands</p>
        </div>
        <div className="flex flex-row gap-4">
          <p className="text-4xl text-[#999999]">for a</p>
          {!text ? (
            <h2 className="text-4xl text-[#999999]">tough</h2>
          ) : (
            <AnimatePresence>
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4xl text-[#999999]"
              >
                easy
              </motion.h2>
            </AnimatePresence>
          )}
          <p className="text-4xl text-[#999999]">world.</p>
        </div>
      </motion.div>
    </div>
  );
}
