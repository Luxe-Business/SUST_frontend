import React from 'react'
import { getStudentLives } from '@/app/libs/getAllData'

import parse from 'html-react-parser'

async function StudentsLife({ lang }) {
  const StudentsLifeData = await getStudentLives(lang)

  if (StudentsLifeData.length == 0) {
    return (
      <div className='container'>
        <h1 className='text-center text-6xl font-bold text-red-500'>
          Data is Empty
        </h1>
      </div>
    )
  }

  return (
    <>
      <h2 className='mb-2 text-3xl font-bold'>الحياة الجامعية</h2>

      {StudentsLifeData.map(studentLife => (
        <div key={studentLife.id}>
          <hr className='mb-5' />
          <h1>{studentLife.attributes.Title}</h1>
          <div>{parse(studentLife.attributes.Content)}</div>
        </div>
      ))}
    </>
  )
}
export default StudentsLife
