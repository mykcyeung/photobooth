'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const textVariant = {
  hidden: { opacity: 0. },
  visible: {opacity: 1}
}

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col h-screen justify-center items-center">
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5 }}
        className="font-extrabold text-6xl flex flex-col justify-center items-center md:text-8xl text-center ">
          Sharing Photos <br />
          Sharing joy
      </motion.h1>
        <div className="mt-16 flex flex-col justify-center items-center">
          <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
            transition={{ duration: 5 }}
          >
            <Link href="/hong-kong" className="group">Explore more</Link>
          <div
            className="w-24 transition-all hover:w-24 h-1 bg-black rounded-full" />
          </motion.div>
          
        </div>
      </div>
      
      </section>
  )
}

export default Hero