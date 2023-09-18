import Image from 'next/image'
import pres from './images/pres.jpg'

export default function Greeting({ content }) {
  return (
    <div className=''>
      <div className='flex flex-wrap mb-10'>
        <div className='w-1/4 px-5'>
          <Image
            width={200}
            height={200}
            className='w-full rounded-md'
            src={pres}
            alt=''
          />
        </div>
        <div className='w-3/4 px-5 text-xl'>
        {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
