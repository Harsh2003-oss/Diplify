import React from 'react'
import {motion} from 'framer-motion'
const Marquee = () => {
    
  return (
    <>

      <div className='w-full py-20 rounded-1xl bg-[#004D43] '>
<div className='text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex whitespace-nowrap'>
< motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5,}}  className='text-[10vw] font-semibold uppercase mb-[3vw] leading-none'>Welcome to diplify</motion.h1>
< motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5,}} className='text-[10vw] font-semibold uppercase  mb-[3vw] leading-none'>Welcome to diplify</motion.h1>
</div>
      </div>
    </>
  )
}

export default Marquee
