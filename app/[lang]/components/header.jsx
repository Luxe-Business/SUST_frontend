import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import NavMobile from './NavMobile'
import Nav from './Nav'
import logo from '@/public/asserts/logo.png'

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header >
      <nav className='container flex items-center justify-between'>
        <div className={` scroll-smooth fixed z-[10000]`}
        >
          <div
            className={`active shadow-md shadow-[#2386C8]'}
       lg:px-0 w-full  fixed top-0 left-0 z-[10000]
        transition-all duration-300 text-black bg-white `}
          >
            <div className='flex lg:flex   mx-auto lg:mx-14  items-center px-4   justify-evenly '>
              <Image src={logo}
                width="100"
                height="50"
                style={{ padding: "5px", }}
                alt="logo" />
              <Nav lang={lang} navigation={navigation} />
              <LocaleSwitcher />
              <NavMobile lang={lang} navigation={navigation} />
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}
