import React from 'react'
import HeroWraper from '@/app/[lang]/components/HeroWraper'

const layout = ({ children, params }) => {
  return (
    <>
      <HeroWraper lang={params.lang} id={params.id ? params.id : ''} />
      <div className='py-20'>{children}</div>
    </>
  )
}

export default layout
