'use client'

import Card from '@/components/Card'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'

const textVariant = {
  hidden: { opacity: 0. },
  visible: {opacity: 1}
}

const HongKongPage = () => {
  const pathName = usePathname().replace("/", "");
  return (
    <div className='flex flex-col justify-center items-center'>
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5 }}
        className='h-[100vh] flex justify-center items-center text-center font-extrabold text-6xl sm:text-8xl capitalize'>{pathName.replace("-", " ")}</motion.h1>
      <Card
        image='/HK01.JPG'
        description="ISO 320 112mm f5 1/800s"
        title='Choi Hung Estate'
      />
    </div>
  )
}

export default HongKongPage