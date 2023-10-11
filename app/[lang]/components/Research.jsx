'use client'

import React from 'react'
import { getScientificResearch } from '@/app/libs/getAllData'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'

import ContentLoader from 'react-content-loader'

import { Card, CardHeader, Image } from '@nextui-org/react'
import { NextUIProvider } from '@nextui-org/react'

export default function Research({ data, lang }) {
  const [researchData, setResearchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const checkData = async () => {
      setIsLoading(true)
      const scientificResearchData = await getScientificResearch(lang)
      setIsLoading(false)

      if (scientificResearchData.length == 0) {
        console.log('There is no Data in this language Yet')
      } else {
        setResearchData(scientificResearchData)
      }
    }

    checkData()
  }, [lang])

  const getResearchImageFunction = research => {
    if (researchData.length == 0 || research.attributes.image.data == null) {
      return 'https://via.placeholder.com/350x150'
    } else {
      return research.attributes.image.data.attributes.formats.medium.url
    }
  }

  return (
    <NextUIProvider>
      <h2 className='mb-2 text-3xl font-bold'>{data.headTitle}</h2>
      <hr className='mb-5' />
      <div className='grid max-w-[1400px] grid-cols-12 grid-rows-2 gap-2 px-8'>
        {isLoading && (
          <ContentLoader
            width={450}
            height={400}
            className='col-span-12 h-[300px] sm:col-span-4'
            viewBox='0 0 450 400'
            backgroundColor='#f0f0f0'
            foregroundColor='#dedede'
            // {...props}/
          >
            <rect x='43' y='304' rx='4' ry='4' width='271' height='9' />
            <rect x='44' y='323' rx='3' ry='3' width='119' height='6' />
            <rect x='42' y='77' rx='10' ry='10' width='388' height='217' />
          </ContentLoader>
        )}
        {isLoading && (
          <ContentLoader
            width={450}
            height={400}
            className='col-span-12 h-[300px] sm:col-span-4'
            viewBox='0 0 450 400'
            backgroundColor='#f0f0f0'
            foregroundColor='#dedede'
            // {...props}/
          >
            <rect x='43' y='304' rx='4' ry='4' width='271' height='9' />
            <rect x='44' y='323' rx='3' ry='3' width='119' height='6' />
            <rect x='42' y='77' rx='10' ry='10' width='388' height='217' />
          </ContentLoader>
        )}
        {isLoading && (
          <ContentLoader
            width={450}
            height={400}
            className='col-span-12 h-[300px] sm:col-span-4'
            viewBox='0 0 450 400'
            backgroundColor='#f0f0f0'
            foregroundColor='#dedede'
            // {...props}/
          >
            <rect x='43' y='304' rx='4' ry='4' width='271' height='9' />
            <rect x='44' y='323' rx='3' ry='3' width='119' height='6' />
            <rect x='42' y='77' rx='10' ry='10' width='388' height='217' />
          </ContentLoader>
        )}
        {!isLoading &&
          researchData.map(research => (
            <Card
              key={research.id}
              className='col-span-12 h-[450px] sm:col-span-4'
            >
              <Link href={`/${lang}/research/${research.id}`}>
                <CardHeader className='absolute top-0 z-10 flex-col !items-start bg-blue-600/50'>
                  <h4 className='text-large font-bold  text-white'>
                    {research.attributes.Title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt='Card background'
                  className='z-0  w-full object-cover'
                  src={getResearchImageFunction(research)}
                />

                <div className='mb-2 mt-4 px-2'>
                  {research.attributes.breif_Text}
                </div>
              </Link>
            </Card>
          ))}
      </div>

      {/* /////////////////////////////// */}

      {/* <Image width={350} height={250} className='mb-5 w-full' src={research} alt='' />
      <p className='text-semibold mb-3 text-lg'>
        هو كل جهد علمي منظَّم يهدف إلى تنمية المعرفة الإنسانية والقدرة على
        تطويرها وتنفيذها وتطبيقها؛ لذلك تسعى عمادة البحث العلمي إلى توفير المناخ
        المناسب للباحثين من داخل الجامعة وخارجها، للتنافس في مجالات البحث
        المختلفة، ورفد المجتمع الفلسطيني باحتياجاته من أنواع المعرفة العلمية
        المتطورة التي تسهم في دعم الاقتصاد الوطني ونموه وتطوره..
      </p> */}
    </NextUIProvider>
  )
}
