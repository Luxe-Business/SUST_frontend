import { getDictionary } from '@/lib/dictionary'

// export async function generateMetadata({ params: { lang } }) {
//   // read route params

//   const { pages } = await getDictionary(lang)

//   // fetch data

//   return {
//     title: `${pages.academic?.title} | SUST`,
//     description: pages.academic?.description || ''
//     // keywords: seo.keywords?.split(' ') || ''
//   }
// }
import React from 'react'

async function Activities({ params: { lang, id } }) {
  // const {
  //   page: { activities }
  // } = await getDictionary(lang)

  return <div className='text-4xl'></div>
  // {
  //   activities?.title
  // }
}

export default Activities
