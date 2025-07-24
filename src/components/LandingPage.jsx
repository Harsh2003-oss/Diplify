
import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-screen bg-zinc-900 pt-1'>
                <div className='textstructure mt-52 px-20'>
                  {["We Create","Eye Opening","Presentations"].map((items,index)=>{
                    return   <div className='masker text-[7.5vw] uppercase leading-[6.3vw] tracking-tight font-medium'>
                        <h1>{items}</h1>
                        </div>
                  })}
                    
                </div>
                <div className='border-t-[1px] border-zinc-800 mt-32 py-5 px-20'>
{["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
    return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
})}
                </div>
                </div>
          
        </>
    )
}

export default LandingPage
