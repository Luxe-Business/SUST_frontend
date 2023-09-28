import React from 'react'
import {
  BsWhatsapp,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsTelegram
} from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'
import { getPageSettings } from '@/app/libs/getAllData'

async function SocialMedia({ lang }) {
  const pageSettingsData = await getPageSettings(lang)

  return (
    <>
      <div className='fixed left-0 top-[40%] z-10 cursor-pointer  text-xl'>
        <ul className='parent m-0 text-white'>
          {/* <li className='dd bg-green-600 p-2.5'>
            <BsWhatsapp className='hover:translate-x-1' />
          </li>
          <li className='dd bg-[#00ACEE] p-2.5'>
            <BsTwitter className='hover:translate-x-1' />
          </li> */}
          {/* <li className='dd bg-[#0077B5] p-2.5'>
          <BsLinkedin className='hover:translate-x-1' />
          </li> */}
          <li className='dd bg-[#3B5999] p-2.5 '>
            <Link
              target='_blank'
              href={
                !pageSettingsData[0]
                  ? '/#'
                  : pageSettingsData[0].attributes.facebook_URL
              }
            >
              <FaFacebookF className='hover:translate-x-1' />
            </Link>
          </li>
          <li className='dd bg-[#E4405F] p-2.5'>
            <Link
              target='_blank'
              href={
                !pageSettingsData[0]
                  ? '/#'
                  : pageSettingsData[0].attributes.instagram_URL
              }
            >
              <BsInstagram className='hover:translate-x-1' />
            </Link>
          </li>
          <li className='dd bg-[#CD201F] p-2.5'>
            <Link
              target='_blank'
              href={
                !pageSettingsData[0]
                  ? '/#'
                  : pageSettingsData[0].attributes.youtube_URL
              }
            >
              <BsYoutube className='hover:translate-x-1' />
            </Link>
          </li>
          <li className='dd bg-[#0088cc] p-2.5'>
            <Link
              target='_blank'
              href={
                !pageSettingsData[0]
                  ? '/#'
                  : pageSettingsData[0].attributes.telegram_URL
              }
            >
              <BsTelegram className='hover:translate-x-1' />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SocialMedia
