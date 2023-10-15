import Image from 'next/image'

import parse from 'html-react-parser'

export default function Greeting({ content, image }) {
  return (
    <div className=''>
      <div className='mb-10 flex flex-col flex-wrap lg:flex-row'>
        <div className='w-full px-5 lg:w-1/4'>
          <Image
            width={200}
            height={200}
            className='w-full rounded-md'
            src={!image ? '' : image}
            alt=''
          />
        </div>
        <div className='px-5 text-xl md:w-3/4'>
          {!content ? 'There is no data' : parse(content)}
        </div>
      </div>
    </div>
  )
}
