'use client'

import Card from '@/components/Card'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'

const textVariant = {
  hidden: { opacity: 0. },
  visible: {opacity: 1}
}

const TurkeyPage = () => {
  const pathName = usePathname().replace("/", "");
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5 }}
        className='h-[100vh] flex justify-center items-center text-center font-extrabold text-6xl sm:text-8xl capitalize w-full'>{pathName}</motion.h1>
      <div className="gap-28 flex flex-col w-full justify-center items-center">
      <Card
        image='/turkey/DSCF1002.jpg'
        description="ISO 320 27mm f5.6 1/300s"
        title='Istanbul'
      />
      <Card
        image='/turkey/DSCF1429.jpg'
        description="ISO 1250 282mm f5.6 1/280s"
        title='Kas'
      />
      </div>
      
    </div>
  )
}

export default TurkeyPage