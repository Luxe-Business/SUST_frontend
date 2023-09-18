'use client'
import Link from 'next/link'
import React, { useState } from 'react'
// import icons
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

// FaBars
const NavMobile = ({ lang, navigation }) => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <nav className='relative z-20 text-lg font-[700] leading-7 lg:hidden'>
      {/* menu icons */}
      <button type='button' onClick={() => setisOpen(prev => !prev)}>
        <span className='absolute -right-1 -top-1 h-4 w-4 rounded-sm bg-[#ffffff] p-4 content-none'></span>{' '}
        <FaBars size={22} className='relative text-black' />
      </button>
      {/* nav list */}
      <ul
        className={`${
          isOpen ? 'right-0' : 'right-full'
        } fixed top-0 flex h-screen w-full flex-col items-center justify-center space-y-8
          bg-[#019FF8] text-lg transition-all`}
      >
        {/* close button */}
        <button className='absolute left-6 top-6'>
          <AiOutlineClose size={22} onClick={() => setisOpen(false)} />
        </button>
        <div className=' h-[92px] w-fit items-center justify-between text-lg font-[700] leading-7 lg:flex '>
          <li className='block    text-white hover:bg-[#019FF8] '>
            <Link
              className='relative block px-4 py-2 font-bold  lg:p-4'
              href={`/${lang}`}
            >
              {navigation.home}
            </Link>
          </li>
          <li className='block    hover:bg-[#019FF8] hover:text-white '>
            <Link
              className='relative block px-4 py-2 font-bold  lg:p-4'
              href={`/${lang}/about`}
            >
              {navigation.about}
            </Link>
          </li>
          <li className='block    hover:bg-[#019FF8] hover:text-white '>
            <Link
              className='relative block px-4 py-2 font-bold  lg:p-4'
              href={`/${lang}`}
            >
              {navigation.colleges}
            </Link>
          </li>
          <li className='block   py-4  hover:bg-[#019FF8] hover:text-white '>
            <Link
              className='relative block px-4 py-8 font-bold  lg:p-4'
              href={`/${lang}/academic`}
            >
              {navigation.academic}
            </Link>
          </li>
          <li className='block   py-4  hover:bg-[#019FF8] hover:text-white '>
            <Link
              className='relative block px-4 py-8 font-bold  lg:p-4'
              href={`/${lang}/research`}
            >
              {navigation.research}
            </Link>
          </li>
          <li className='block    hover:bg-[#019FF8] hover:text-white '>
            <Link
              className='relative block px-4 py-2 font-bold  lg:p-4'
              href={`/${lang}`}
            >
              {navigation.life}
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavMobile
