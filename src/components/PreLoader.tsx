import { motion } from "framer-motion";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { CgFramer } from "react-icons/cg";

export default function PreLoader() {
  return (
    <div className="flex h-screen w-full flex-col justify-center bg-black text-center text-[#E3E3E3] ">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4, duration: 2, ease: [0, 0.71, 0.2, 1.01] }}
        className="pb-4 text-5xl"
      >
        My name is Anthony, and this my portfolio.
      </motion.h1>
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
          transition={{ delay: 0.5, duration: 2 }}
          className="pt-4 text-5xl text-[#61dbfb]"
        >
          <BiLogoReact />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
          className="pt-4 text-5xl"
        >
          <TbBrandNextjs />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 2 }}
          className="pt-4 text-5xl text-[#f7df1e]"
        >
          <BiLogoJavascript />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
          className="pt-4 text-5xl text-[#007acc]"
        >
          <BiLogoTypescript />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 2 }}
          className="pt-4 text-5xl text-white"
        >
          <CgFramer />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="pt-4 text-5xl text-white"
        >
          <TbBrandPrisma />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 2 }}
          className="pt-4 text-5xl text-[#06b6d4]"
        >
          <BiLogoTailwindCss />
        </motion.p>
      </div>
    </div>
  );
}
