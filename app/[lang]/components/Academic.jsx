import React from 'react'
import parse from 'html-react-parser'
import { getAcademicAffairs } from '@/app/libs/getAllData'

async function Academic({ lang }) {
  const AcademicAffairsData = await getAcademicAffairs(lang)

  if (AcademicAffairsData.length == 0) {
    return (
      <div className='container'>
        <h1 className='text-center text-6xl font-bold text-red-500'>
          This Page Data is Empty
        </h1>
      </div>
    )
  }
  const AcadimicData = AcademicAffairsData[0]
  return (
    <div>
      <h2 className='mb-2 text-3xl font-bold'>
        {AcadimicData.attributes.Title}
      </h2>
      {parse(AcadimicData.attributes.Content)}
    </div>
  )
}

export default Academic
