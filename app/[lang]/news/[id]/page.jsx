import React from 'react'
import { fetchSingleData } from '@/app/api/route'
import parse from 'html-react-parser'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function Single({ params: { id } }) {
  const singleNewsRes = await fetchSingleData(id, 'news')
  const singleNewsData = singleNewsRes.data

  if (singleNewsRes.error) {
    notFound()
  }

  const getNewsImageFunction = news => {
    if (singleNewsRes.length == 0 || news.attributes.image.data == null) {
      return ''
    } else {
      return news.attributes.image.data.attributes.formats.large.url
    }
  }

  return (
    <div className='container'>
      <div className='flex justify-between'>
        <span>{singleNewsData.attributes.Author}</span>
        <span>
          Created at
          {new Date(singleNewsData.attributes.createdAt).toLocaleDateString(
            'en-GB'
          )}
        </span>
      </div>

      {getNewsImageFunction(singleNewsData) == '' ? null : (
        <div className=' text-center'>
          <Image
            width={500}
            height={500}
            src={getNewsImageFunction(singleNewsData)}
            className=' h-full w-full align-middle transition duration-300 ease-linear'
            alt=''
          />
        </div>
      )}

      <h1 className='text-4xl'>{singleNewsData.attributes.Title}</h1>
      <div className=''>{parse(singleNewsData.attributes.Content)}</div>
    </div>
  )
}

export default Single
