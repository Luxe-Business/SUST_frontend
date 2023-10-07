import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Academic from '../components/Academic'

export async function generateMetadata({ params: { lang } }) {
  // read route params

  const { pages } = await getDictionary(lang)

  // fetch data

  return {
    title: `${pages.academic?.title} | SUST`,
    description: pages.academic?.description || ''
    // keywords: seo.keywords?.split(' ') || ''
  }
}

export default async function AcademicPage({ params: { lang } }) {
  const { pages } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <Academic data={pages.academic} lang={lang} />
    </div>
  )
}
