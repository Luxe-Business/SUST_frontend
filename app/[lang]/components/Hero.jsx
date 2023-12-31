'use client'

import { usePathname } from 'next/navigation'

import React from 'react'

import SocialMedia from './SocialMedia'

function Hero({
  lang,
  pages,
  pageSettingsData,
  HeroImage,
  params,
  singleCollegeData
}) {
  const currentPage = usePathname().split('/')[2]
  function getHeroData() {
    let data

    switch (currentPage) {
      case 'about':
        data = pages.about
        break
      case 'news':
        data = pages.news
        break
      case 'hospital':
        data = pages.hospital
        break
      case 'activites':
        data = pages.activites
        break
      case 'academic':
        data = pages.academic
        break
      case 'research':
        data = pages.research
        break
      case 'student_life':
        data = pages.student_life
        break
      case 'Colleges':
        data = pages.Colleges
        break
      default:
        data = pages.home
    }
    return data
  }

  let heroData = getHeroData()

  return (
    <div
      className='relative overflow-hidden bg-cover bg-no-repeat'
      style={{
        backgroundPosition: '50%',
        backgroundImage: `url(${HeroImage})`,
        height: '700px'
      }}
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.80)] bg-fixed'>
        <div className='flex h-full items-center justify-center'>
          <div className='px-6 text-center text-white md:px-12'>
            <h1 className='mb-10 mt-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
              {/* {pageSettingsData.length == 0
                ? ''
                : pageSettingsData[0]?.attributes.Cover_Title}{' '} */}
              {heroData.title}
              <br />
            </h1>
            <p className='mx-auto xl:max-w-[600px]'>
              {/* {pageSettingsData.length == 0
                ? ''
                : pageSettingsData[0]?.attributes.Cover_Descreption} */}
              {heroData.description == undefined
                ? singleCollegeData.attributes.Title
                : heroData.description}
            </p>
          </div>
        </div>
      </div>
      <SocialMedia pageSettingsData={pageSettingsData} lang={lang} />
    </div>
  )
}

export default Hero

// <div className=' relative h-[500px]'>
//   <Image height={600} width={1200} className='absolute inset-0 !w-full !h-auto ' src={hero} />
//   <div className = "overlay absolute inset-0 bg-black opacity-30 w-full h-auto"></div>
//   <div className='absolute inset-0 text-white container pt-24'>
//     <h1 className='text-4xl font-bold mb-3'>Uinversity News</h1>
//     <p className = "w-[700px]">
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy text ever
//       since the 1500s
//     </p>
//   </div>
// </div>
