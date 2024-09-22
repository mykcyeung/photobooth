import { SocialIcon } from 'react-social-icons'
import {socialMedia} from "@/constant/index"

const d = new Date();
const year = d.getFullYear()



const Footer = () => {
  return (
    <section id='footer'>
      <div className='mt-24 bottom-0h-36 flex flex-col  justify-between items-center pb-6 pt-6'>
        <div className="flex justify-center items-center gap-6">

          {socialMedia.map(item => (
            <SocialIcon
            url={item.url}
            network={item.media}
            bgColor="black"
            style={{ height: 40, width: 40 }}
            key={item.url}
          />
          ))}
          
        </div>
        <div className="text-sm font-extralight mt-8">Copyright © {year} Jay Yeung</div>
      </div>
    </section>
  )
}

export default Footer