import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'
import { getDictionary } from '@/lib/dictionary'
import { getUniversityHospitals } from '@/app/libs/getAllData'

export async function generateMetadata({ params: { lang } }) {
  // read route params

  const { pages } = await getDictionary(lang)

  // fetch data

  return {
    title: `${pages.hospital?.title} | SUST`,
    description: pages.hospital?.description || ''
    // keywords: seo.keywords?.split(' ') || ''
  }
}

const page = async ({ params: { lang } }) => {
  const UniverstyHospitalData = await getUniversityHospitals(lang)

  if (UniverstyHospitalData.length == 0) {
    return (
      <div className='container'>
        <h1 className='text-center text-6xl font-bold text-red-500'>
          This Page Data is Empty
        </h1>
      </div>
    )
  }
  const hospitalsData = UniverstyHospitalData[0]
  return (
    <div className=' mx-44 my-24  md:px-6'>
      <section className='mb-32 text-center md:text-left'>
        <div className='mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12'>
          <div className='mb-6 md:mb-0'>
            <div
              className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg'
                className='w-full'
                alt='Louvre'
                width={800}
                height={800}
              />
              <a>
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div>
            {/* <h3 className='mb-3 text-2xl font-bold'>Welcome to California</h3>
            <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
              <small>
                Published <u>13.01.2022</u> by
                <a>Anna Maria Doe</a>
              </small>
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p> */}
            {parse(hospitalsData.attributes.About)}
          </div>
        </div>
        <div className='mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12'>
          <div className='mb-6 md:order-2 md:mb-0'>
            <div
              className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg'
                className='w-full'
                alt='Louvre'
                width={800}
                height={800}
              />
              <a>
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div className='md:order-1'>
            {/* <h3 className='mb-3 text-2xl font-bold'>Exhibition in Paris</h3>
            <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
              <small>
                Published <u>12.01.2022</u> by
                <a>Halley Frank</a>
              </small>
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
          </p>*/}
            {parse(hospitalsData.attributes.Sections)}
          </div>
        </div>
        <div className='mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12'>
          <div className='mb-6 md:mb-0'>
            <div
              className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg'
                className='w-full'
                alt='Louvre'
                width={800}
                height={800}
              />
              <a>
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div>
            {/* <h3 className="mb-3 text-2xl font-bold">Stock market boom</h3>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>10.01.2022</u> by
            <a >Joe Svan</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
          volutpat feugiat. Donec.
        </p>
     */}
            {parse(hospitalsData.attributes.About_the_administration)}
          </div>
        </div>
        <div className='mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12'>
          <div className='mb-6 md:order-2 md:mb-0'>
            <div
              className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
                className='w-full'
                alt='Louvre'
                width={800}
                height={800}
              />
              <a>
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div className='md:order-1'>
            {/* <h3 className='mb-3 text-2xl font-bold'>Exhibition in Paris</h3>
            <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
              <small>
                Published <u>12.01.2022</u> by
                <a>Halley Frank</a>
              </small>
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
          </p>*/}
            {parse(hospitalsData.attributes.about_the_doctors)}
          </div>
        </div>
        <div className='mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12'>
          <div className='mb-6 md:mb-0'>
            <div
              className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://images.unsplash.com/photo-1664902276790-90624a60ff47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                className='w-full'
                alt='Louvre'
                width={800}
                height={800}
              />
              <a>
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div>
            {/* <h3 className="mb-3 text-2xl font-bold">Stock market boom</h3>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>10.01.2022</u> by
            <a >Joe Svan</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
          volutpat feugiat. Donec.
        </p>
     */}
            {parse(hospitalsData.attributes.about_the_clinics)}
          </div>
        </div>
        <div className='mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12'>
          <div className='mb-6 md:order-2 md:mb-0'>
            <div
              className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://images.unsplash.com/photo-1620790647593-b3a6916c7d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                className='w-full'
                alt='Louvre'
                width={800}
                height={800}
              />
              <a>
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div className='md:order-1'>
            {/* <h3 className='mb-3 text-2xl font-bold'>Exhibition in Paris</h3>
            <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
              <small>
                Published <u>12.01.2022</u> by
                <a>Halley Frank</a>
              </small>
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
          </p>*/}
            {parse(hospitalsData.attributes.about_the_patients)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
