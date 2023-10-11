import React from 'react'
import { getFeaturedResearch } from '@/app/libs/getAllData'
import parse from 'html-react-parser'
import Link from 'next/link'

const ResearchSi = async ({ page, lg }) => {
  const {
    sections: { research }
  } = page
  const FeaturedResearches = await getFeaturedResearch(lg)

  const getResearchImageFunction = research => {
    if (
      FeaturedResearches.length == 0 ||
      research.attributes.image.data == null
    ) {
      return 'https://via.placeholder.com/350x150'
    } else {
      return research.attributes.image.data.attributes.formats.medium.url
    }
  }

  return (
    <main className='my-8'>
      <h2 className='mb-12 text-center text-5xl font-medium'>
        {research.title}
      </h2>

      <div className='container mx-auto px-6'>
        <div
          className='h-64 overflow-hidden rounded-md bg-cover bg-center'
          style={{
            backgroundImage:
              " url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"
          }}
        >
          <div className='flex h-full items-center bg-gray-900 bg-opacity-50'>
            <div className='max-w-xl px-10'>
              <h2 className='text-2xl font-semibold text-white'>
                {research.subTitle}
              </h2>
              <p className='mt-2 text-gray-400'>{research.paragraph}</p>
              <Link
                className='mt-4 flex items-center rounded text-sm font-medium uppercase text-white hover:underline focus:outline-none'
                href={`/ar/research/`}
              >
                <span>{research.cta}</span>
                <svg
                  className='mx-2 h-5 w-5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-3 md:-mx-4 md:flex-row'>
          {FeaturedResearches.map(singleResearch => (
            <div
              key={singleResearch.id}
              className='h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:w-1/2'
              style={{
                backgroundImage: `url(${getResearchImageFunction(
                  singleResearch
                )})`
              }}
            >
              <div className='flex h-full items-center    bg-gray-900 bg-opacity-50'>
                <div className='max-w-xl px-10'>
                  <h2 className='text-2xl font-semibold text-white'>
                    {singleResearch.attributes.Title}
                  </h2>
                  <div className='mt-2 text-gray-400'>
                    {singleResearch.attributes.breif_Text}
                  </div>

                  <Link
                    className='mt-4 flex items-center rounded text-sm font-medium uppercase text-white hover:underline focus:outline-none'
                    href={`/${lg}/research/${singleResearch.id}`}
                  >
                    <span>{research.cta}</span>
                    <svg
                      className='mx-2 h-5 w-5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ResearchSi
