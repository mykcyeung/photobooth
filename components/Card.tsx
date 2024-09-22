'use client'

import Image from 'next/image';
import {motion} from "framer-motion"

interface CardProps {
  image: string;
  description?: string;
  title: string;
}

const textVariant = {
  hidden: { opacity: 0 },
  visible: {opacity: 1}
}

const Card = ({image, description, title}: CardProps) => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className="relative flex justify-center items-center px-8 transition-all duration-700 h-[90vh] min-w-[80vw]">
      <Image
        src={image}
        alt={title}
          // width={350}
          // height={600}
          fill
        className='object-contain '
        />
      </div>
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileHover="visible"
        
        // animate="visible"
        // transition={{duration:500}}
        className="absolute flex justify-center items-center flex-col backdrop-blur-md rounded-md px-4 py-2 max-w-[30vw] text-center md:py-4">
        <p className=' text-white font-bold text-xl md:text-3xl'>{title}</p>
        {description && <p className='text-md md:mt-6 mt-2 font-extralight text-white'>{description}</p>}
      </motion.div>
      
    </div>
  )
}

export default Card