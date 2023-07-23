import { motion } from "framer-motion";

export default function PreLoader() {
  return (
    <div className="flex h-screen w-full flex-col justify-center bg-black text-center text-[#E3E3E3] ">
      <h1 className="text-5xl ">Hi, I am Anthony</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pt-4 text-3xl"
      >
        Full Stack Web Developer
      </motion.p>
      <div className="flex flex-row justify-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="pt-4 text-3xl"
        >
          ReactJS
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="pt-4 text-3xl"
        >
          NextJS
        </motion.p>
      </div>
    </div>
  );
}
