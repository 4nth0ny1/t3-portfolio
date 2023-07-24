import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-[#0b0b0b] px-80 text-[#999999] opacity-90">
      <div className="flex-1">
        <Link href="/">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="btn btn-ghost text-xl normal-case"
          >
            UI
          </motion.a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <Link href="/about">
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
          </Link>
          <Link href="/work">
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
          </Link>
          <Link href="/blog">
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
          </Link>
          <Link href="/contact">
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
          </Link>
        </ul>
      </div>
    </div>
  );
}
