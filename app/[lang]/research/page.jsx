import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Research from '../components/Research'

export default async function ResearchPage({ params: { lang } }) {
  const {
    page: { news }
  } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <Research lang={lang} />
    </div>
  )
}
