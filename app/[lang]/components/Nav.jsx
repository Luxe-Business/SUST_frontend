'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { fetchData } from '@/app/api/route'

const Nav = ({ lang, navigation, collegesData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     const fetchedData = await fetchData(lang, 'colleges-and-institutes');
  //     setData(fetchedData);
  //   }
  //   getData();
  // }, [lang]);

  const hospitalMenuItems = navigation.subhospital

  return (
    <div className='hidden h-[100px] w-fit items-center justify-between text-lg font-[700] leading-7 lg:flex '>
      {/* { data?.Title} */}
      <li className='block bg-[#019FF8]  py-8 text-white '>
        <Link
          className='relative block px-4 py-8 font-bold  lg:p-4'
          href={`/${lang}`}
        >
          {navigation.home}
        </Link>
      </li>
      <li className='block   py-8   hover:bg-[#019FF8] hover:text-white '>
        <Link
          className='relative block px-4 py-8 font-bold  lg:p-4'
          href={`/${lang}/about`}
        >
          {navigation.about}
        </Link>
      </li>
      <li className='block   py-8   hover:bg-[#019FF8] hover:text-white '>
        <Link
          className='relative block px-4 py-8 font-bold  lg:p-4'
          href={`/${lang}/hospital`}
        >
          {navigation.hospital}
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
      <li className='block   py-8   hover:bg-[#019FF8] hover:text-white '>
        <Link
          className='relative block px-4 py-8 font-bold  lg:p-4'
          href={`/${lang}/research`}
        >
          {navigation.research}
        </Link>
      </li>
      <li className='block   py-8   hover:bg-[#019FF8] hover:text-white '>
        <Link
          className='relative block px-4 py-8 font-bold  lg:p-4'
          href={`/${lang}/student-life`}
        >
          {navigation.life}
        </Link>
      </li>

      <li className='block'>
        <div className='relative'>
          <button
            className='  flex items-center justify-center py-8 hover:bg-[#019FF8] hover:text-white'
            onClick={toggleDropdown}
          >
            <span className='relative  block px-4 py-8 font-bold  lg:p-4'>
              {navigation.colleges}
            </span>
            <IoIosArrowDown />{' '}
          </button>
          {isOpen && (
            <div className='absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-xl'>
              <div className=''>
                {collegesData.map(subCollege => (
                  <div key={subCollege.id}>
                    <Link
                      href={`/${lang}/Colleges/${subCollege.id}`}
                      className='block px-4 py-2  text-gray-700 hover:bg-[#2386C8] '
                    >
                      {subCollege.attributes.Title}
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
