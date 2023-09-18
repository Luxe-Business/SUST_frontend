import { getDictionary } from '@/lib/dictionary'
import React from 'react'

async function Activities({params: {lang}}) {
  const { page: {activities} } = await getDictionary(lang);

  return (
    <div className='text-4xl'>{activities?.title}</div>
  )
}

export default Activities