import React from 'react'
import { fetchSingleData } from '@/app/api/route'
import parse from 'html-react-parser'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function Single({ params: { id } }) {
  const singleActivityRes = await fetchSingleData(id, 'university-activites')
  const singleActivityData = singleActivityRes.data
  if (singleActivityRes.error) {
    notFound()
  }

  const getActivitesImageFunction = actvity => {
    if (
      singleActivityRes.length == 0 ||
      actvity.attributes.image.data == null
    ) {
      return ''
    } else {
      return actvity.attributes.image.data.attributes.formats.medium.url
    }
  }

  return (
    <div className='container'>
      {getActivitesImageFunction(singleActivityData) == '' ? null : (
        <div className=' text-center'>
          <Image
            width={500}
            height={500}
            src={getActivitesImageFunction(singleActivityData)}
            className=' h-full w-full align-middle transition duration-300 ease-linear'
            alt=''
          />
        </div>
      )}

      <h1 className='text-4xl'>{singleActivityData.attributes.title}</h1>
      <div className=''>{parse(singleActivityData.attributes.content)}</div>
    </div>
  )
}

export default Single
