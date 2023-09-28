import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Research from '../components/Research'
import StudentsLife from '../components/StudentsLife'

export default async function StudentLifePage({ params: { lang } }) {
  // const {
  //   page: { news }
  // } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <StudentsLife lang={lang} />
    </div>
  )
}
