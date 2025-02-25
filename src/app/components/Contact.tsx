import React from 'react'
import { BsTelegram } from "react-icons/bs";

function Contact() {
  return (
    <div id='contact' className='w-full h-screen flex justify-center items-center p-4 contact text-gray-300'>
    <form action="https://formsubmit.co/bankgim@gmail.com" method="POST" className='flex flex-col max-w-[600px] w-full'>
      <div className="pb-8">
        <p className='text-4xl sm:text-6xl font-bold inline border-b-4 border-teal-400 '>Contact</p>
        <p className=' py-4 text-lg md:text-2xl'>I look forward to hearing from you. Feel free to reach out anytime.</p>
      </div>
      <input type="text" placeholder='Name' name="name" className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none  py-2 px-4'/>
      <input type="email"  placeholder='Email' name="email" className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none py-2 px-4 mt-4'/>
      <textarea name="message" rows={5}  id="message" placeholder='Message' className='rounded-3xl resize-none bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none  py-2 px-4 my-4'></textarea>
      <input type="hidden" name="_captcha" value="false" />
      <button className='text-white rounded-full border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center gap-4'>Contact Me <BsTelegram className='text-2xl'/>
      </button>
    </form>
    </div>
  )
}

export default Contact