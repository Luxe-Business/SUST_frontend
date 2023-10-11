import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedActivites } from '@/app/libs/getAllData'
import parse from 'html-react-parser'

export default async function Activities({ page, lg }) {
  const featuredActivites = await getFeaturedActivites(lg)

  const getActivitesImageFunction = activites => {
    if (
      featuredActivites.length == 0 ||
      activites.attributes.image.data == null
    ) {
      return 'https://via.placeholder.com/350x150'
    } else {
      return activites.attributes.image.data.attributes.formats.medium.url
    }
  }

  function cutStringByWords(string, words) {
    return (
      string
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .filter((_, index) => index < words)
        .join(' ') + '...'
    )
  }

  const {
    sections: { activities }
  } = page
  return (
    <section>
      <h2 className='mb-12 mt-24 text-center text-5xl font-medium'>
        {activities}
      </h2>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {featuredActivites.map(actvity => (
          <div
            className='zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
            data-te-ripple-init
            data-te-ripple-color='light'
            key={actvity.id}
          >
            <Image
              alt=''
              src={getActivitesImageFunction(actvity)}
              className='h-full w-full align-middle transition duration-300 ease-linear'
              width={500}
              height={500}
            />
            <Link href={`${lg}/activites/${actvity.id}`}>
              <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed'>
                <div className='flex h-full items-end justify-start'>
                  <div className='m-6 text-white'>
                    <h5 className='mb-3 text-lg font-bold'>
                      {actvity.attributes.title}
                    </h5>
                    <div> {actvity.attributes.breif_Text}</div>
                    <p>
                      <small>
                        <u>
                          {new Date(
                            actvity.attributes.createdAt
                          ).toLocaleDateString('en-GB')}
                        </u>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]'></div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
