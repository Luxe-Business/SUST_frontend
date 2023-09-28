import React from 'react'
import { getCollegesAndInstitutes } from '@/app/libs/getAllData'
import parse from 'html-react-parser'

import { notFound } from 'next/navigation'

const page = async ({ params: { lang, id } }) => {
  const allColleges = await getCollegesAndInstitutes(lang)
  let error = false

  const checkData = () => {
    if (!allColleges) {
      error = true
      console.log('There is no Data in this language Yet')
    } else {
      error = false
      return allColleges
    }
  }

  const collegesData = checkData()

  const currentCollegeData = collegesData.filter(checkID)

  if (currentCollegeData.length == 0) {
    notFound()
  }

  function checkID(college) {
    return college.id == id
  }

  return (
    <div className='container mx-auto'>
      {error ? (
        <p className='text-center text-7xl text-red-500'>
          There is no data for this language
        </p>
      ) : (
        <div>
          <h1 className='text-5xl'>
            {!currentCollegeData[0]?.attributes.Title ? (
              <p>No Data</p>
            ) : (
              currentCollegeData[0]?.attributes.Title
            )}
          </h1>
          <div className=''>
            {!currentCollegeData[0]?.attributes.About_the_college ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.About_the_college)
            )}
          </div>
          <div className=''>
            {!currentCollegeData[0]?.attributes.Bachelor_programs ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.Bachelor_programs)
            )}
          </div>
          <div className=''>
            {!currentCollegeData[0]?.attributes.Bachelor_programs ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.Bachelor_programs)
            )}
          </div>
          <div className=''>
            {!currentCollegeData[0]?.attributes.Postgraduate_programs ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.Postgraduate_programs)
            )}
          </div>
          <div className=''>
            {!currentCollegeData[0]?.attributes.The_Activities ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.The_Activities)
            )}
          </div>
          <div className=''>
            {!currentCollegeData[0]?.attributes.Content ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.Content)
            )}
          </div>
          <div className=''>
            {!currentCollegeData[0]?.attributes.Dean_speech ? (
              <p>No Data</p>
            ) : (
              parse(currentCollegeData[0]?.attributes.Dean_speech)
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default page
