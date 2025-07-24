
import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-screen bg-zinc-900 pt-1'>
                <div className='textstructure mt-52 px-20'>
                  {["We","Create","Wardrobe Magic",].map((items,index)=>{
                    return   <div className='masker text-[7.5vw] uppercase leading-[6vw] tracking-tighter font-medium'>
                        <h1>{items}</h1>
                        </div>
                  })}
                    
                </div>
                <div className='border-t-[1px] border-zinc-800 mt-32 py-5 px-20 flex justify-between'>
{["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
    return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
})}

<div className='start'>
    <div className='px-2 py-.5 mb-5 uppercase border-[1px] border-zinc-500 font-light text-sm rounded-xl'>Explore</div>
</div>
                </div>
                </div>
          
        </>
    )
}

export default LandingPage
