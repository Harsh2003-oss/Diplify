import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
const Featured = () => {
const cards =[ useAnimation(),useAnimation()]
   const handleHoever =(index)=>{
cards[index].start({y:"0"})
   }
    
   const handleHoeverEnd =(index)=>{
cards[index].start({y:"100%"})
   }

    return (
        <>
            <div className='w-full py-10'>
                <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                    <h1 className='text-8xl tracking-tighter'>Featured Projects</h1>
                </div>
                <div className='px-20'>
                    <motion.div 
                    onHoverStart={()=>handleHoever(0)}
                    onHoverEnd={()=>handleHoeverEnd(0)}
                    
                    className='cards w-full flex gap-10 mt-10'>
                        <div onHoverEnd={()=>handleHoever()} className='cardcontainer relative w-1/2 h-[75vh] '>
                        <div className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] text-8xl '>
                         {"FYDE".split('').map((item,index)=>
                        <motion.span 
                        initial={{y:"100%"}}
                         animate={cards[0]}
                         transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                         className='inline-block'
                         >
                            {item}</motion.span>)}
                        </div>
                        <div className='card w-full h-full rounded-xl bg-green-600  overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                       </div>
                        </div>
                        <motion.div 
                         onHoverStart={()=>handleHoever(1)}
                    onHoverEnd={()=>handleHoeverEnd(1)}
                        className='cardcontainer relative w-1/2 h-[75vh]'>
                         <div className='card w-full h-full rounded-xl  overflow-hidden bg-green-600'>
                                                 <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] text-8xl '>
                                                 {"VISE".split('').map((item,index)=>
                                                 <motion.span 
                        initial={{y:"100%"}}
                         animate={cards[1]}
                         transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                         className='inline-block'
                         >
                            {item}</motion.span>)}
                                                 </h1>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png'" alt="" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Featured
