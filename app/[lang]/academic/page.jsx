import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Academic from '../components/Academic'

export default async function AcademicPage({ params: { lang } }) {
  const { pages } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <Academic data={pages.academic} lang={lang} />
    </div>
  )
}
