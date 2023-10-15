import { getDictionary } from '@/lib/dictionary'
import React from 'react'

import StudentsLife from '@/app/[lang]/components/StudentsLife'

export async function generateMetadata({ params: { lang } }) {
  // read route params

  const { pages } = await getDictionary(lang)

  // fetch data

  return {
    title: `${pages.student_life?.title} | SUST`,
    description: pages.student_life?.description || ''
    // keywords: seo.keywords?.split(' ') || ''
  }
}

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
