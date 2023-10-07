import { getDictionary } from '@/lib/dictionary'
import React from 'react'

import StudentsLife from '../components/StudentsLife'

export default async function StudentLifePage({ params: { lang } }) {
  // const {
  //   page: { news }
  // } = await getDictionary(lang)

  const { pages } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <StudentsLife data={pages.student_life} lang={lang} />
    </div>
  )
}
