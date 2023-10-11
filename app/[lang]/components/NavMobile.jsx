'use client'
import Link from 'next/link'
import React, { useState } from 'react'
// import icons
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

// FaBars
const NavMobile = ({ lang, navigation, collegesData }) => {
  const [isOpen, setisOpen] = useState(false)

  const [isdropDownOpen, setisDropDownOpen] = useState(false)
  const pathname = usePathname()
  const currentPage = usePathname().split('/')[2]
  const toggleDropdown = () => {
    setisDropDownOpen(!isdropDownOpen)
  }
  const CloseDropdown = () => {
    setisDropDownOpen(false)
  }

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
          bg-[#019FF8af] text-lg transition-all`}
      >
        {/* close button */}
        <button className='absolute left-6 top-6'>
          <AiOutlineClose size={22} onClick={() => setisOpen(false)} />
        </button>
        <div className=' flex  w-fit flex-col items-center justify-between gap-5 text-lg font-[700] leading-7 '>
          <li
            className={
              'block     text-white hover:bg-[#019FF8]' +
              `${pathname == `/${lang}` ? ' bg-[#019FF8] text-white' : ''}`
            }
          >
            <Link
              onClick={() => setisOpen(false)}
              className={'relative block px-4  font-bold  lg:p-4'}
              href={`/${lang}`}
            >
              {navigation.home}
            </Link>
          </li>
          <li
            className={
              'block    hover:bg-[#019FF8] hover:text-white ' +
              `${
                pathname == `/${lang}/about` ? ' bg-[#019FF8] text-white' : ''
              }`
            }
          >
            <Link
              onClick={() => setisOpen(false)}
              className='relative block px-4  font-bold  lg:p-4'
              href={`/${lang}/about`}
            >
              {navigation.about}
            </Link>
          </li>
          <li
            className={
              'block    hover:bg-[#019FF8] hover:text-white ' +
              `${
                pathname == `/${lang}/hospital`
                  ? ' bg-[#019FF8] text-white'
                  : ''
              }`
            }
          >
            <Link
              onClick={() => setisOpen(false)}
              className='relative block px-4  font-bold  lg:p-4'
              href={`/${lang}/hospital`}
            >
              {navigation.hospital}
            </Link>
          </li>

          <li
            className={
              'block    hover:bg-[#019FF8] hover:text-white ' +
              `${
                pathname == `/${lang}/academic`
                  ? ' bg-[#019FF8] text-white'
                  : ''
              }`
            }
          >
            <Link
              onClick={() => setisOpen(false)}
              className='relative block px-4  font-bold  lg:p-4'
              href={`/${lang}/academic`}
            >
              {navigation.academic}
            </Link>
          </li>
          <li
            className={
              'block    hover:bg-[#019FF8] hover:text-white ' +
              `${
                pathname == `/${lang}/research`
                  ? ' bg-[#019FF8] text-white'
                  : ''
              }`
            }
          >
            <Link
              onClick={() => setisOpen(false)}
              className='relative block px-4 font-bold  lg:p-4'
              href={`/${lang}/research`}
            >
              {navigation.research}
            </Link>
          </li>
          <li
            className={
              'block    hover:bg-[#019FF8] hover:text-white ' +
              `${
                pathname == `/${lang}/student_life`
                  ? ' bg-[#019FF8] text-white'
                  : ''
              }`
            }
          >
            <Link
              onClick={() => setisOpen(false)}
              className='relative block px-4 font-bold  lg:p-4'
              href={`/${lang}/student_life`}
            >
              {navigation.life}
            </Link>
          </li>
          <li
            className={
              'block    hover:bg-[#019FF8] hover:text-white ' +
              `${currentPage == `Colleges` ? ' bg-[#019FF8] text-white' : ''}`
            }
          >
            <button
              className={
                'flex items-center justify-center transition-all hover:bg-[#019FF8] hover:text-white '
              }
              onClick={toggleDropdown}
            >
              <span className='relative  block px-4 py-8 font-bold  lg:p-4'>
                {navigation.colleges}
              </span>
              <IoIosArrowDown />
            </button>
            {isdropDownOpen && (
              <div>
                {collegesData.map(subCollege => (
                  <div key={subCollege.id}>
                    <Link
                      onClick={() => setisOpen(false)}
                      href={`/${lang}/Colleges/${subCollege.id}`}
                      className='block px-4 py-2  text-gray-700 hover:bg-[#2386C8] '
                    >
                      {subCollege.attributes.Title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavMobile
