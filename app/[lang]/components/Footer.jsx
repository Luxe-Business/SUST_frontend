import React from 'react'
import { getDictionary } from '@/lib/dictionary'
import wave from '@/images/wave.svg'

import Image from 'next/image'

import { BsInstagram, BsYoutube, BsTelegram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'
import {
  getPageSettings,
  getCollegesAndInstitutes
} from '@/app/libs/getAllData'

export default async function Footer({ lang }) {
  const pageSettingsData = await getPageSettings(lang)

  const allColleges = await getCollegesAndInstitutes(lang)

  const checkData = () => {
    if (!allColleges) {
      console.log('There is no Data in this language Yet')
    } else return allColleges
  }

  const collegesData = checkData()

  const getLogoImageFunction = logo => {
    if (
      pageSettingsData.length == 0 ||
      logo.attributes.University_logo.data == null
    ) {
      return 'https://via.placeholder.com/350x150'
    } else {
      return logo.attributes.University_logo.data.attributes.formats.medium.url
    }
  }

  const logo = getLogoImageFunction(
    pageSettingsData.length == 0 ? undefined : pageSettingsData[0]
  )

  const { footer } = await getDictionary(lang)

  return (
    <>
      <div className='relative bottom-0 left-0  flex justify-start md:items-end md:justify-center '>
        <Image
          className='absolute  top-10 z-0 h-full w-full object-cover lg:object-fill xl:mt-10'
          src='https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_background.png'
          alt='background'
          fill={true}
        />
        <div className=' z-10 flex flex-col items-start   justify-start px-4  pt-36 md:items-center md:justify-center md:px-6 md:pt-32 lg:pt-40 xl:px-20 xl:pt-96'>
          <div className='flex  flex-col items-start justify-between gap-5 xl:flex-row xl:justify-center xl:space-x-8'>
            <div className='flex  items-center justify-start space-x-4'>
              <div className='w-16 cursor-pointer self-start'>
                <Image
                  src={logo}
                  width='180'
                  height='90'
                  style={{ padding: '5px' }}
                  alt='logo'
                />
              </div>
              <p className='w-60 text-lg font-semibold leading-normal text-white xl:text-2xl'>
                {footer.name}
              </p>
            </div>
            <div className='mt-12 grid w-full grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-0 md:w-auto md:gap-x-28 xl:mt-0 xl:gap-8'>
              <div className='flex flex-col items-start justify-start space-y-6 sm:w-40 md:w-auto xl:w-72'>
                <h2 className='text-base font-bold leading-4 text-white xl:text-xl xl:font-semibold xl:leading-5'>
                  {footer.community}
                </h2>

                <Link
                  className='text-left text-base leading-none text-gray-100 hover:text-gray-400'
                  href={`/${lang}/about`}
                >
                  {footer.about}
                </Link>
                <Link
                  className='text-left text-base leading-none text-gray-100 hover:text-gray-400'
                  href={`/${lang}/hospital`}
                >
                  {footer.hospital}
                </Link>
                <Link
                  className='text-left text-base leading-none text-gray-100 hover:text-gray-400'
                  href={`/${lang}/academic`}
                >
                  {footer.academic}
                </Link>
                <Link
                  className='text-left text-base leading-none text-gray-100 hover:text-gray-400'
                  href={`/${lang}/research`}
                >
                  {footer.research}
                </Link>
                <Link
                  className='text-left text-base leading-none text-gray-100 hover:text-gray-400'
                  href={`/${lang}/student_life`}
                >
                  {footer.life}
                </Link>
              </div>

              <div className='flex flex-col items-start justify-start space-y-6 sm:w-40 md:w-auto xl:w-72'>
                <h2 className='text-base font-bold leading-4 text-white xl:text-xl xl:font-semibold xl:leading-5'>
                  {footer.colleges}
                </h2>
                {collegesData
                  .filter((_, i) => i < 5)
                  .map(subCollege => (
                    <Link
                      key={subCollege.id}
                      href={`/${lang}/Colleges/${subCollege.id}`}
                      className='text-left text-base leading-none text-gray-100 hover:text-gray-400'
                    >
                      {subCollege.attributes.Title}
                    </Link>
                  ))}
                {/* <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.hospital}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.colleges}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.academic}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.research}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.life}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.hospital}
                </button> */}
              </div>

              {/* <div className=' flex flex-col items-start justify-start space-y-6 xl:w-72'>
                <h2 className='text-base font-bold leading-4 text-white xl:text-xl xl:font-semibold xl:leading-5'>
                  {' '}
                  {footer.resources}
                </h2>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.accessibility}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.usability}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.accessibility}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.usability}
                </button>
                <button className='text-left text-base leading-none text-gray-100 hover:text-gray-400'>
                  {footer.accessibility}
                </button>
              </div> */}
            </div>
          </div>
          <div className='mt-12 flex  w-full flex-col-reverse  items-center xl:flex-row  xl:justify-between '>
            <p className='mt-10 text-sm leading-none text-white md:mt-12 xl:mt-0'>
              {' '}
              {footer.allright}
            </p>
            <div className='mt-10 flex w-full flex-col items-start justify-start space-y-4 md:mt-12 md:w-auto md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0 xl:mt-0 xl:space-x-6'>
              <button className='text-base leading-none text-white hover:text-gray-300'>
                {footer.terms}
              </button>
              <button className='p-2 text-base leading-none text-white hover:text-gray-300'>
                {footer.privacy}
              </button>
              <button className='text-base leading-none text-white hover:text-gray-300'>
                {footer.security}
              </button>
              <button className='text-base leading-none text-white hover:text-gray-300'>
                {footer.sitemap}
              </button>
            </div>
            <div className='flex  w-full items-start justify-start  space-x-8 md:w-auto md:items-center md:justify-end '>
              <button className='w-6 text-white hover:text-gray-200'>
                <Link
                  target='_blank'
                  href={
                    !pageSettingsData[0]
                      ? '/#'
                      : pageSettingsData[0]?.attributes.facebook_URL
                  }
                >
                  <FaFacebookF />
                </Link>
              </button>
              <button className='w-6 text-white hover:text-gray-200'>
                <Link
                  target='_blank'
                  href={
                    !pageSettingsData[0]
                      ? '/#'
                      : pageSettingsData[0]?.attributes.instagram_URL
                  }
                >
                  <BsInstagram />
                </Link>
              </button>
              <button className='w-6  text-white hover:text-gray-200'>
                <Link
                  target='_blank'
                  href={
                    !pageSettingsData[0]
                      ? '/#'
                      : pageSettingsData[0]?.attributes.youtube_URL
                  }
                >
                  <BsYoutube />
                </Link>
              </button>
              <button className='w-6  text-white hover:text-gray-200'>
                <Link
                  target='_blank'
                  href={
                    !pageSettingsData[0]
                      ? '/#'
                      : pageSettingsData[0]?.attributes.telegram_URL
                  }
                >
                  <BsTelegram />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
