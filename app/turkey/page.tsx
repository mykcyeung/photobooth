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
        className='h-[80vh] flex justify-center items-center text-center font-extrabold text-6xl sm:text-8xl capitalize w-full'>{pathName}</motion.h1>
      <div className="md:gap-28 gap-14 flex flex-col w-full justify-center items-center">
      <Card
        image='/turkey/DSCF1002.JPG'
        description="ISO 320 27mm f5.6 1/300s"
          title='Istanbul'
          height={ 3213}
        width={ 2085}
        classname='md:max-w-[60vw] lg:max-w-[50vw]'
      />
      <Card
        image='/turkey/DSCF1429.JPG'
        description="ISO 1250 282mm f5.6 1/280s"
          title='Kas'
          height={ 2080}
        width={ 3120}
        classname=''
        />
        <Card
        image='/turkey/DSCF1615.JPG'
        description="ISO 320 27mm f5.6 1/300s"
          title='Cappadocia'
          height={ 3213}
        width={ 2085}
        classname='md:max-w-[60vw] lg:max-w-[50vw]'
        />
        <Card
        image='/turkey/DSCF1661.JPG'
        description="ISO 320 27mm f5.6 1/300s"
          title='Cappadocia'
          height={ 3213}
        width={ 2085}
        classname='md:max-w-[60vw] lg:max-w-[50vw]'
      />
      </div>
      
    </div>
  )
}

export default TurkeyPage