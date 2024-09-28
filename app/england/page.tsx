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
        className='h-[80vh] flex justify-center items-center text-center font-extrabold text-6xl sm:text-8xl capitalize w-full'>{pathName}</motion.h1>
      <div className="md:gap-28 gap-14 flex flex-col w-full justify-center items-center ">
        
          <Card
          image="/uk/DSCF3453.jpg"
          description="ISO 320 163mm f5.6 1/420s"
          title='London'
          height={ 3213}
        width={ 2085}
        classname='md:max-w-[60vw] lg:max-w-[50vw]'
        />
        <Card
          image="/uk/DSCF4999.JPG"
          // description="ISO 320 163mm f5.6 1/420s"
          title='York'
          height={ 3213}
        width={ 2085}
        classname='md:max-w-[60vw] lg:max-w-[50vw]'
        />
        
      
      </div>
      
    </div>
  )
}

export default UKPage