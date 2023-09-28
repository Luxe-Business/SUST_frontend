import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Academic from '../components/Academic'

export default async function AcademicPage({ params: { lang } }) {
  const {
    page: { news }
  } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <Academic lang={lang} />
    </div>
  )
}
