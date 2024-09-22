'use client'
import { motion } from "framer-motion"
import { navLink } from '@/constant'
import Link from 'next/link'
import React, { useState } from 'react'

const linksVariants = {
  initial: { y: -5, opacity: 1 },
  animate: { y: 0, opacity: 1 }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [hideNNav, setHideNav] = useState(false)

  // const hiddenNavbar = () => {
  //   if (window.scrollY >= 80) {
  //     setHideNav(true)
  //   } else {
  //     setHideNav(false)
  //   }
  // }

  const handleclick = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <nav className='z-40 mt-2 sm:mt-4 flex justify-center items-center '>
      <div className="relative max-w-2xl px-10 h-16 flex justify-between items-center shadow-lg rounded-full gap-16 md:gap-48 bg-primary">
        
          {/* LOGO */}
        <Link href="/" className="font-extrabold sm:text-4xl text-3xl text-black">
          PhotoBooth
        </Link>
        
        {/* MENU BAR */}
        <div className="flex flex-col md:hidden justify-center items-center">
          <button className='transition-all group' onClick={handleclick}>
            {/* <div className="w-6 sm:w-8 h-1 bg-unselect transition-all  group-hover:bg-black rounded-full " />
            <div className="w-6 sm:w-8 h-1 bg-unselect transition-all  group-hover:bg-black rounded-full mt-1" />
            <div className="w-6 sm:w-8 h-1 bg-unselect transition-all  group-hover:bg-black rounded-full mt-1" /> */}

            <div className={`h-4 w-4 rounded-full hover:scale-125 hover:bg-black transition-all ${isOpen ? " bg-black" : "bg-unselect"}`}/>
          </button>
        </div>

        
        

        {/* MENU */}
        <div className="hidden md:block" onClick={handleclick}>
          <button className={` hover:text-black transition-all ${isOpen ? "text-black" : "text-unselect"}`}>Menu</button>
        </div>
        
        </div>

      
        {/* DROPDOWN */}
        {isOpen &&
        <motion.div
          variants={linksVariants}
          initial="initial"
          animate="animate"
          transition={{duration: 0.5}}
          className="z-30 absolute min-w-4xl px-20 mt-[calc(100vh-72px] top-20 sm:top-24  flex flex-col justify-center items-center gap-8 rounded-2xl shadow-xl bg-primary text-lg md:text-xl py-20" onClick={handleclick}>
          {navLink.map(link => (
            <Link key={link.title} href={link.url}>{link.title}</Link >
          ))
          }
          </motion.div>
        }
    </nav>
  )
}

export default Navbar