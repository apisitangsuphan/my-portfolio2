import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full h-screen flex justify-center items-center p-4 contact text-gray-300'>
    <form action="" className='flex flex-col max-w-[600px] w-full'>
      <div className="pb-8">
        <p className='text-4xl font-bold inline border-b-4 border-teal-400 '>Contact</p>
        <p className=' py-4'>Please feel free to touch with me.</p>
      </div>
      <input type="text" placeholder='Name' name="name" className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none  py-2 px-4'/>
      <input type="email"  placeholder='Email' name="email" className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none py-2 px-4 mt-4'/>
      <textarea name="message" rows={5}  id="message" placeholder='Message' className='rounded-3xl resize-none bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none  py-2 px-4 my-4'></textarea>
      <button className='text-white rounded-full border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
    </form>
    </div>
  )
}

export default Contact