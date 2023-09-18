'use client'
import React, { useState, useEffect } from 'react';
import { fetchData } from '@/app/api/route';
import { Tab } from '@headlessui/react'
import About from './About'
import Greeting from './Greeting'
import Vision from './Vision'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AboutPage({lang}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData(lang, 'about-univercities');
      setData(fetchedData);
    }

    getData();
  }, [lang]);

  const categories = {
    'عن الجامعة': {
      id: 1,
      component: <About content={data?.Description}/>
    },
    'رسالة ترحيب رئيس الجامعة': {
      id: 2,
      component: <Greeting content={data?.Welcome_Message}/>
    },
    'سياسة الجامعة': {
      id: 3,
      component: null
    },
    'الرؤيا والرسالة': {
      id: 4,
      component: <Vision content={data?.Vision_And_Message}/>
    },
  }
  return (
    <div>
      {' '}
      <Tab.Group>
        <div className='flex flex-col-reverse gap-10 lg:flex-row lg:gap-0'>
          <Tab.List className='rounded-xlpx-5 flex w-72 flex-col space-x-1'>
            {Object.keys(categories).map(category => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    `w-full py-2.5 text-xl font-bold leading-5 text-black ${
                      lang == 'ar' ? 'text-right' : 'text-left'
                    } `,
                    'outline-0 focus:outline-none ',
                    selected ? '' : 'text-black/30 hover:bg-white/[0.12]'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2 w-full px-5'>
            {Object.values(categories).map((category, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'outline-0 focus:outline-none'
                )}
              >
                {category.component}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}

export default AboutPage
