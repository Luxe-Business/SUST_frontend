import Image from 'next/image'
import pres from './images/pres.jpg'
import parse from 'html-react-parser'

export default function Greeting({ content, image }) {
  // console.log(content)
  return (
    <div className=''>
      <div className='mb-10 flex flex-wrap'>
        <div className='w-1/4 px-5'>
          <Image
            width={200}
            height={200}
            className='w-full rounded-md'
            src={!image ? pres : image}
            alt=''
          />
        </div>
        <div className='w-3/4 px-5 text-xl'>
          {!content ? 'There is no data' : parse(content)}
        </div>
      </div>
    </div>
  )
}
