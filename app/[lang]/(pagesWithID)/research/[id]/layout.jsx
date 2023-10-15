import React from 'react'

import HeroWraper from '@/app/[lang]/components/HeroWraper'

const layout = ({ children, params }) => {
  return (
    <div>
      <HeroWraper lang={params.lang} id={params.id ? params.id : ''} />
      <div className='py-20'>{children}</div>
    </div>
  )
}

export default layout
