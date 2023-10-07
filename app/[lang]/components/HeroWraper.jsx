'use client'
import { usePathname } from 'next/navigation'
import Hero from './Hero'

import React from 'react'

const HeroWraper = ({ lang }) => {
  const pathname = usePathname().split('/')[2]

  return (
    <>
      <Hero lang={lang} currentPage={pathname} />
    </>
  )
}

export default HeroWraper
