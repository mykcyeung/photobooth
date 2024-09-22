'use client'

import Card from '@/components/Card'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'

const textVariant = {
  hidden: { opacity: 0. },
  visible: {opacity: 1}
}

const UKPage = () => {
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
          image="/uk/DSCF3453.jpg"
          description="ISO 320 163mm f5.6 1/420s"
          title='London'
        />
        <Card
          image="/uk/DSCF4999.jpg"
          // description="ISO 320 163mm f5.6 1/420s"
          title='York'
        />
        
      
      </div>
      
    </div>
  )
}

export default UKPage