import React from 'react'
import Hero from './Hero'
import { getDictionary } from '@/lib/dictionary'

import { fetchSingleData } from '@/app/api/route'
import { notFound } from 'next/navigation'

import { getPageSettings } from '@/app/libs/getAllData'

import { headers } from 'next/headers'

async function HeroWraper({ lang, id }) {
  const headersList = headers()
  const pathname = headersList.get('x-invoke-path') || ''

  const singleCollegeRes = await fetchSingleData(id, 'colleges-and-institutes')
  const singleCollegeData = singleCollegeRes.data

  const { pages } = await getDictionary(lang)

  const pageSettingsData = await getPageSettings(lang)
  const getHeroImageFunction = () => {
    if (pageSettingsData.length == 0) {
      return 'https://images.squarespace-cdn.com/content/v1/6051eac616f58d6b0b8af484/1618589907784-M538LOR1RC6FWZ0KVI50/back.jpeg'
    } else {
      return pageSettingsData[0]?.attributes.cover_image.data.attributes.formats
        .medium.url
    }
  }

  const HeroImage = getHeroImageFunction()

  return (
    <>
      <Hero
        singleCollegeData={singleCollegeData ? singleCollegeData : ''}
        pages={pages}
        pageSettingsData={pageSettingsData}
        HeroImage={HeroImage}
      />
    </>
  )
}

export default HeroWraper
