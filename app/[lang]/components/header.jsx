import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import NavMobile from './NavMobile'
import Nav from './Nav'

import {
  getCollegesAndInstitutes,
  getPageSettings
} from '@/app/libs/getAllData'

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  const allColleges = await getCollegesAndInstitutes(lang)

  const pageSettingsData = await getPageSettings(lang)

  const getLogoImageFunction = logo => {
    if (
      pageSettingsData.length == 0 ||
      logo.attributes.University_logo.data == null
    ) {
      return 'https://via.placeholder.com/350x150'
    } else {
      return logo.attributes.University_logo.data.attributes.formats.large.url
    }
  }

  const checkData = () => {
    if (!allColleges) {
      console.log('There is no Data in this language Yet')
    } else return allColleges
  }

  const collegesData = checkData()
  const logo = getLogoImageFunction(
    pageSettingsData.length == 0 ? undefined : pageSettingsData[0]
  )

  return (
    <header>
      <nav className='container flex items-center justify-between'>
        <div className={` fixed z-[10000] scroll-smooth`}>
          <div
            className={`active shadow-[#2386C8]'} fixed
       left-0 top-0  z-[10000] w-full bg-white text-black
        shadow-md transition-all duration-300 lg:px-0 `}
          >
            <div className='mx-auto flex   items-center justify-evenly  px-4 lg:mx-14   lg:flex '>
              <Image
                src={logo}
                width='100'
                height='50'
                style={{ padding: '5px' }}
                alt='logo'
              />
              <Nav
                lang={lang}
                navigation={navigation}
                collegesData={collegesData}
              />
              <LocaleSwitcher />
              <NavMobile lang={lang} navigation={navigation} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
