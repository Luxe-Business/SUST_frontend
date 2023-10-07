'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const ContactUs = ({ page, lang }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [thereError, setThereIsError] = useState('')
  const [isSuccessful, setIsSuccessful] = useState(false)

  const {
    sections: { cuntactus }
  } = page

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    //  const NewData = {...data,Subject}
    setIsLoading(true)
    const url = `https://ambitious-warmth-a158024e45.strapiapp.com/api/contact-uses`

    const res = await fetch(url, {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })

    if (res.status !== 200) {
      setIsLoading(false) // <--
      setThereIsError('Something went wrong')
    } else {
      setIsLoading(false) // <-- Here
      setIsSuccessful(true)
    }
    reset()
  }

  // useEffect(() => {
  //   const onSubmit = data => {
  //     setIsLoading(true)
  //     sendContactUsData(lang, 'contact-us', data)
  //   }
  // }, [lang,data])

  return (
    <div>
      <div className='  px-8 py-12'>
        <div className='w-full text-center'>
          <h1 className='text-3xl text-black lg:text-5xl'>{cuntactus.title}</h1>
        </div>
        <div className='mx-auto mt-14 grid max-w-screen-2xl grid-cols-1 gap-14 rounded-lg bg-gray-100 px-8 py-16 text-gray-900 shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32'>
          <div className='items-right flex flex-col justify-between'>
            <div>
              <h2 className='text-4xl font-bold leading-tight lg:text-5xl'>
                {cuntactus.subTitle}
              </h2>
              <div className='mt-8 text-gray-700'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.605133705095!2d37.065649699999994!3d36.6118181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fc54304ad635f%3A0x5a46a1fc93f4a7d2!2z2KfZhNis2KfZhdi52Kkg2KfZhNiz2YjYsdmK2Kk!5e0!3m2!1sen!2s!4v1696494979628!5m2!1sen!2s'
                  width='100%'
                  height='400'
                  style={{
                    border: '2px',
                    marginBottom: '8px',
                    padding: '10px',
                    borderRadius: '25px'
                  }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span className='text-sm font-bold uppercase text-gray-600'>
                {cuntactus.fullName}
                <span className='font-bold text-red-500'>*</span>
              </span>
              <input
                className='focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none'
                type='text'
                placeholder=''
                {...register('Name', {
                  required: 'This Filed is Required',
                  minLength: {
                    value: 3,
                    message: 'The name should at least 3 characters long'
                  }
                })}
              />
              {errors.Name && (
                <p className='font-bold text-red-500' role='alert'>
                  {errors.Name.message}
                </p>
              )}
            </div>
            <div className='mt-8'>
              <span className='text-sm font-bold uppercase text-gray-600'>
                {cuntactus.mail}
                <span className='font-bold text-red-500'>*</span>
              </span>
              <input
                className='focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none'
                {...register('Email', {
                  required: 'This Filed is Required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'your email should be like info@example.com'
                  }
                })}
              />
              {errors.Email && (
                <p className='font-bold text-red-500' role='alert'>
                  {errors.Email.message}
                </p>
              )}
            </div>
            <div className='mt-8'>
              <span className='text-sm font-bold uppercase text-gray-600'>
                {cuntactus.message}{' '}
                <span className='font-bold text-red-500'>*</span>
              </span>
              <textarea
                className='focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none'
                {...register('Message', { required: 'This Filed is Required' })}
              />
              {errors.Message && (
                <p className='text-red-500' role='alert'>
                  {errors.Message.message}
                </p>
              )}
            </div>
            <div className='mt-8'>
              <button
                aria-disabled={isLoading}
                type='submit'
                className='focus:shadow-outline w-full rounded-lg bg-indigo-500 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none'
              >
                {cuntactus.sendMessage}
              </button>
            </div>
            <div className='mt-4'>
              {thereError && (
                <p className='font-bold text-red-500'>{thereError}</p>
              )}
              {isSuccessful && (
                <p className=' font-bold text-green-500'>
                  Your Message has been delivered successfuly we will contact
                  you as soon sa we can
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
