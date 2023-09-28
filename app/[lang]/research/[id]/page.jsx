import React from 'react'
import { fetchSingleData } from '@/app/api/route'
import parse from 'html-react-parser'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function SingleResearch({ params: { id } }) {
  const singleResearchRes = await fetchSingleData(
    id,
    'scientific-research-postgraduate-studies'
  )

  if (singleResearchRes.error) {
    notFound()
  }
  const singleResearchData = singleResearchRes.data

  const getResearchImageFunction = research => {
    if (
      singleResearchRes.length == 0 ||
      research.attributes.image.data == null
    ) {
      return ''
    } else {
      return research.attributes.image.data.attributes.formats.large.url
    }
  }

  return (
    <div className='container'>
      <div className='flex justify-between'>
        <span>
          Created at
          {new Date(singleResearchData.attributes.createdAt).toLocaleDateString(
            'en-GB'
          )}
        </span>
      </div>
      {getResearchImageFunction(singleResearchData) == '' ? null : (
        <div className=' text-center'>
          <Image
            width={500}
            height={500}
            src={getResearchImageFunction(singleResearchData)}
            className=' h-full w-full align-middle transition duration-300 ease-linear'
            alt=''
          />
        </div>
      )}
      <h1 className='text-4xl'>{singleResearchData.attributes.Title}</h1>
      <div className=''>{parse(singleResearchData.attributes.Content)}</div>
    </div>
  )
}

export default SingleResearch
