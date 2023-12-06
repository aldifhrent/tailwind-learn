import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='px-[80px] py-[30px] flex justify-between items-center'>
      <Image src='./assets/agenone/Logo.svg' width={170} height={34} alt='Logo'/>
      <nav className='flex gap-x-[40px] text-white cursor-pointer'>
        <h2>Home</h2>
        <h2>Services</h2>
        <h2>Project</h2>
        <h2>About Us</h2>
      </nav>
      <button className='bg-gradient-to-r from-[#00796D] to-[#38C682] py-[16px] px-[24px] rounded-full text-white'>Contact Us</button>
    </header>
  )
}

export default Header