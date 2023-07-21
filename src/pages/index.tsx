// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";
import Hero from "../components/index/Hero";
import FeaturedBlogs from "~/components/index/FeaturedBlogs";
import FeaturedProjects from "~/components/index/FeaturedProjects";
import { motion } from "framer-motion";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // background: #191919
  // background: #191919 with opacity-95
  // maybe better: bg-[#0b0b0b] opacity-90
  // mid-background: #ffffff - id colorChange
  // final bottom background: #000000
  // h1: #E3E3E3
  // h2: #999999
  // Nav-Link: #5E5E5E
  // Nav-Link: Hover: #E3E3E3
  // Alt Nav-Link: Hover: #1779ba
  // button hover outline #1779ba

  // Intro animation starts with #000000 First Line, then bottom three show up and then some of the words get swapped to make a new sentence, then the background fades to #191919 opacity and the rest of the webpage shows up.

  return (
    <>
      <Head>
        <title>T3 Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full">
        <div className="bg-[#0b0b0b] opacity-90">
          <Hero />
        </div>
        <motion.div
          initial={{ backgroundColor: "#0b0b0b" }}
          whileInView={{ backgroundColor: "#E3E3E3" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-full w-full"
        >
          <FeaturedProjects />
        </motion.div>
        <motion.div
          initial={{ backgroundColor: "#E3E3E3" }}
          whileInView={{ backgroundColor: "#0b0b0b" }}
          transition={{ delay: 1, duration: 1 }}
          className="h-full w-full"
        >
          <FeaturedBlogs />
        </motion.div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
