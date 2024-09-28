'use client'

import Card from '@/components/Card'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'

const textVariant = {
  hidden: { opacity: 0. },
  visible: {opacity: 1}
}

const ItalyPage = () => {
  const pathName = usePathname().replace("/", "");
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 5 }}
        className='h-[80vh] flex justify-center items-center text-center font-extrabold text-6xl sm:text-8xl capitalize w-full'>{pathName}</motion.h1>
      <div className=" flex flex-col w-full justify-center items-center md:gap-28 gap-14">
      <Card
        image='/italy/DSCF2956.JPG'
        description="ISO 320 45mm f5.6 1/750s"
          title='Amalfi'
          height={ 2085}
        width={ 3123}
        classname='md:max-w-[60vw] lg:max-w-[50vw]'
      />
      <Card
        image='/italy/DSCF4847.JPG'
        description="ISO 320 f5 1/120s"
        title='Turin'
        height={ 2080}
          width={3120}
          classname=''
        />
        <Card
        image='/italy/DSCF4851.JPG'
        description="ISO 1000 f5.6 1/220s"
          title='Turin'
          height={ 2085}
          width={3123}
          classname='md:max-w-[60vw] lg:max-w-[50vw]'
      />
      </div>
      
    </div>
  )
}

export default ItalyPage