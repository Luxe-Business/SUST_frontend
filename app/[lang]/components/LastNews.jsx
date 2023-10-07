import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedNews } from '@/app/libs/getAllData'
import parse from 'html-react-parser'

export default async function LastNews({ page, lg }) {
  const FeaturedNews = await getFeaturedNews(lg)
  const getNewsImageFunction = news => {
    if (FeaturedNews.length == 0 || news.attributes.image.data == null) {
      return 'https://via.placeholder.com/350x150'
    } else {
      return news.attributes.image.data.attributes.formats.large.url
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
    sections: { lastNews }
  } = page
  return (
    <section>
      <h2 className='mb-12 text-center text-5xl font-medium'>{lastNews}</h2>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {FeaturedNews.length == 0 ? (
          <h1>There is no News Yet wait for us</h1>
        ) : (
          FeaturedNews.map(news => (
            <div
              className={
                'zoom  relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 '
              }
              data-te-ripple-init
              data-te-ripple-color='light'
              key={news.id}
            >
              <Link href={`${lg}/news/${news.id}`}>
                <Image
                  width={500}
                  height={500}
                  src={getNewsImageFunction(news)}
                  className=' h-full w-full align-middle transition duration-300 ease-linear'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed'>
                  <div className='flex h-full items-end justify-start'>
                    <div className='m-6 text-white'>
                      <h5 className='mb-3 text-lg font-bold'>
                        {cutStringByWords(news.attributes.Title, 4)}
                      </h5>
                      <div> {parse(news.attributes.Content)}</div>
                      <p>
                        <small>
                          <u>
                            {new Date(
                              news.attributes.createdAt
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
          ))
        )}
      </div>
    </section>
  )
}
