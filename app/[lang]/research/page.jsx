import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import Research from '../components/research'

export default async function ResearchPage({ params: { lang } }) {
  const {
    page: { news }
  } = await getDictionary(lang)

  return (
    <div className="w-full container">
        <Research  />
    </div>
  )
}

