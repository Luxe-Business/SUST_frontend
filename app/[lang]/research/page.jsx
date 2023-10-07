import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Research from '../components/Research'

export async function generateMetadata({ params: { lang } }) {
  // read route params

  const { pages } = await getDictionary(lang)

  // fetch data

  return {
    title: `${pages.research?.title} | SUST`,
    description: pages.research?.description || ''
    // keywords: seo.keywords?.split(' ') || ''
  }
}

export default async function ResearchPage({ params: { lang } }) {
  const { pages } = await getDictionary(lang)

  return (
    <div className='container w-full'>
      <Research data={pages.research} lang={lang} />
    </div>
  )
}
