'use client'
import { motion } from "framer-motion"
import Link from "next/link";
import { useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser"
import { IoMdMail } from "react-icons/io";

const cardVariant = {
  hidden: { opacity: 0.1 },
  visible: {opacity: 1}
}


const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC__PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setisLoading(false)
          form.current.reset()
          console.log(form.current);
          
        },
        (error) => {
          setError(true);
        },
      );
  };

  const checkEmail = () => {

  }
  
  // const handleLoading = () => {
  //   setisLoading(true)
  // }

  return (
    <section id='contact'>
      <div className="-full h-screen flex flex-col justify-center items-center">
        <motion.div
          variants={cardVariant}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 2}}
          className=" flex flex-col justify-center items-center gap-20 md:gap-36 py-24 px-16 rounded-2xl shadow-lg md:px-36 sm:flex-row">
          <div className="flex flex-row gap-4 justify-center items-center">
            <h2 className='text-2xl font-bold md:text-4xl text-center'>Jay Yeung</h2>
            <Link href="https://wa.me/447826182904">
             <IoLogoWhatsapp style={{height: 30, width:30}} />
            </Link>
            
            {/* <SocialIcon 
               url="https://wa.me/447826182904"
               network="whatsapp"
               bgColor="black"
               style={{ height: 40, width: 40 }}
            /> */}
          </div>
          {/* <div className="w-1 h-48 bg-gray-200 rounded-full"></div> */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <p className="pb-2 ">Hi Jay,</p>
            <textarea name="user_message" rows={6} className="resize-none md:w-[30vw] min-w-md px-1 py-2 rounded-lg min-h-[20vh]" placeholder="How are you today"></textarea>
            <input type="text" name="user_email" placeholder="What's your email" className="mt-3 px-1 py-1 rounded-lg "/>
            <div className="flex flex-col justify-center items-center">
            <button className={`flex justify-between items-center gap-2 pt-4 ${isLoading ? "text-unselect" : ""}`} disabled={isLoading ? true : false} >Send <span className=""><IoMdMail /></span></button>
              <div className={`w-14 h-1 rounded-full  ${isLoading ? "bg-unselect" : "bg-black"}`}/>
              {success && <div className="pt-8">Will get back to you soon!</div>}
            {error && <div className="pt-8">Oops... something went wrong!</div>}
            </div>
            
          </form>
        
        {/* <div className=' flex flex-row gap-8 md:text-xl'>
          <h3 className='font-bold justify-end'>Phone</h3>
          <div className="flex flex-col">
            <h3 className=''>UK: +44 07 826 182 904</h3>
            <h3 className=''>HK: +852 9220 4711</h3>
          </div>
        </div> */}
        
          {/* <div className="flex justify-end gap-8 md:text-xl">
          <h3 className='font-bold'>E-mail</h3>
          <a href="" className=''>yeungkc2@hotmail.com</a>
          </div> */}
          
          </motion.div>
      </div>
    </section>
  )
}

export default Contact