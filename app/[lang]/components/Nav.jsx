"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const Nav = ({lang,navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const hospitalMenuItems = navigation.subhospital;

  return (
      <div className='hidden h-[118px] w-fit text-lg font-[700] leading-7 lg:flex justify-between items-center '>
      <li className="block   py-8  bg-[#019FF8] text-white ">
    <Link className="relative block py-8 px-4 lg:p-4  font-bold" href={`/${lang}`}>{navigation.home}</Link>
  </li>
  <li className="block   py-8   hover:bg-[#019FF8] hover:text-white ">
    <Link className="relative block py-8 px-4 lg:p-4  font-bold" href={`/${lang}/about`}>{navigation.about}</Link>
  </li>
  <li className="block   py-8   hover:bg-[#019FF8] hover:text-white ">
    <Link className="relative block py-8 px-4 lg:p-4  font-bold" href={`/${lang}/hospital`}>{navigation.hospital}</Link>
  </li>
  <li className="block   py-4  hover:bg-[#019FF8] hover:text-white ">
    <Link className="relative block py-8 px-4 lg:p-4  font-bold" href={`/${lang}/academic`}>{navigation.academic}</Link>
  </li>
  <li className="block   py-8   hover:bg-[#019FF8] hover:text-white ">
    <Link className="relative block py-8 px-4 lg:p-4  font-bold" href={`/${lang}/research`}>{navigation.research}</Link>
  </li>
  <li className="block   py-8   hover:bg-[#019FF8] hover:text-white ">
    <Link className="relative block py-8 px-4 lg:p-4  font-bold" href={`/${lang}`}>{navigation.life}</Link>
  </li>

  <li className="block">
        <div className="relative">
    <button
      className="  flex justify-center items-center py-8 hover:bg-[#019FF8] hover:text-white"
      onClick={toggleDropdown}
    >
      <span className="relative  block py-8 px-4 lg:p-4  font-bold">
      {navigation.colleges}
      </span>
      <IoIosArrowDown  />  </button>
    {isOpen && (
      <div 
      className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
         <div className=''>
                 {hospitalMenuItems.map(([label, value], index,href) => (
                <div key={index}>
                   <Link href={`/${lang}/Colleges/${label}`}
                  className="block px-4 py-2  text-gray-700 hover:bg-[#2386C8] "
                > {value}
          </Link>
                </div>
              ))}
   
      </div>
      </div>
    )}
  </div>
  </li>
</div>
  )
}
export default Nav