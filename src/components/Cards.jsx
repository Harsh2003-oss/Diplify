import React from 'react'

const Cards = () => {
  return (
    <>
      <div className='w-full h-screen flex  items-center justify-center px-32 gap-5 bg-zinc-900'>
        <div className='cardcontainer h-[50vh] w-1/2'>
<div className='card relative w-full flex items-center justify-center h-full bg-[#004D43] '>
    <img className='w-32' src="/Logo.png" alt="" />
    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  '>©2019-2025</button>
</div>
        </div>
      
        <div className='cardcontainer relative flex  gap-5 h-[50vh] w-1/2'>
<div className='card w-1/2 h-full bg-[#132220] rounded-xl '>
 <img className='w-32' src="/Logo.png" alt="" />
    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  '>©2019-2025</button>
</div>
<div className='card relative w-1/2 h-full bg-[#132220] rounded-xl '>
 <img className='w-32' src="/Logo.png" alt="" />
    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  '>©2019-2025</button>
</div>
        </div>
        </div>
    </>
  )
}

export default Cards
