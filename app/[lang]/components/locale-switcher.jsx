'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { usePathname } from 'next/navigation'
import { BiWorld } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="">
    <div className="group relative">
        <button className="flex  justify-center items-center gap-1 bg-gray-800 text-white px-2 h-8 rounded">
        <BiWorld/>
        <IoIosArrowDown/>
        </button>
        <nav tabIndex="0" className=" border-2 bg-white invisible border-gray-800 rounded w-20 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="">
            {i18n.locales.map(locale => {
        return (
          <li key={locale}  className="block   ">
           <Link href={redirectedPathName(locale)} className="block px-8 py-3  text-gray-700 hover:bg-[#2386C8] hover:text-white  " >  {locale}</Link>
                </li>
         )})}
            </ul>
        </nav>
    </div>
</div>

  )
}

//     <ul className='flex gap-x-3'>
//     {/* <div className="hover:text-[#322387cc]  py-2 flex rounded" onClick={toggleDropdown}  > */}
//         {/* Langouge */}
//       {/* <IoIosArrowDown className='mt-1 mr-2' />  </div> */}
//  {i18n?.locales.map(locale => {
//             return (
//                 <li key={locale} className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
//                    <Link href={redirectedPathName(locale)} className="block px-4 py-2  text-gray-700 hover:text-[#322387cc] " >  {locale}</Link>
//                    </li>
//         )
//       })}
//       </ul>