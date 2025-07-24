import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full text-black font-bold tracking-tighter text-3xl p-20 bg-[#CDEA68]'>
  <h1 className='text-[2.5vw] leading-[2.5vw]'>We Don’t Just Style — We Define It.
At Diplify, we believe that style is more than appearance — it's a form of expression, powered by intelligence, intuition, and individuality.
Born from a passion for design and driven by smart technology, Diplify merges aesthetic clarity with AI-powered precision to craft personalized, eye-opening outfit suggestions and wardrobe experiences. Whether you're building your look or presenting your best self, Diplify is your digital companion — sleek, sharp, and tailored.</h1>
 
 <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#CDEA68]'>
    <div className='w-1/2 '>
<h1 >Our Approach :</h1>
<button className='px-3 flex gap-5 items-center text-[20px] mt-4  py-1.5 bg-zinc-900 rounded-full text-white'>Read More
   <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
    </button>
    </div>
    <div className='w-1/2 h-[70vh] rounded-3xl'>
    <img className='h-122 w-120 ml-20' src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww" alt="" />
    </div>
 </div>

   </div>
    </>
  )
}

export default About
