import { getDictionary } from '@/lib/dictionary'
import React from 'react'

async function News({params: {lang}}) {
  const { page: {news} } = await getDictionary(lang);

  return (
    <div className='text-4xl'>{news.title}</div>
  )
}

export default News