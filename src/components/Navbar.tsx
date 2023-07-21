import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <div className="navbar bg-[#0b0b0b] px-80 text-[#999999] opacity-90">
      <div className="flex-1">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="btn btn-ghost text-xl normal-case"
        >
          UI
        </motion.a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="btn btn-ghost text-xl normal-case"
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="btn btn-ghost text-xl normal-case"
            >
              Work
            </motion.a>
          </li>
          <li>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="btn btn-ghost text-xl normal-case"
            >
              Blog
            </motion.a>
          </li>
          <li>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="btn btn-ghost text-xl normal-case"
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  );
}
