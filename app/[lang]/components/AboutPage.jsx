'use client'

import { Tab } from '@headlessui/react'
import About from './About'
import Greeting from './Greeting'
import Vision from './Vision'
import Slogan from './UniversitySlogan'
import Plan from './StrategicPlan'
import Chart from './OrganizationalChart'
import Administration from './UniversityAdministration'
import Offices from './OfficesAndDepartments'
import Depend from './Dependability'
import Policy from './Policy'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AboutPage({
  persImage,
  aboutUniversity,
  PrWelcomeMessagey,
  universityPolicy,
  UniversitySlogan,
  StrategicPlan,
  OrganizationalChart,
  UniversityAdministration,
  OfficesAndDepartments,
  Dependability,
  visionAndMission,
  lang
}) {
  const categories = {
    'عن الجامعة': {
      id: 1,
      component: <About content={aboutUniversity} />
    },
    'رسالة ترحيب رئيس الجامعة': {
      id: 2,
      component: <Greeting content={PrWelcomeMessagey} image={persImage} />
    },
    'سياسة الجامعة': {
      id: 3,
      component: <Policy content={universityPolicy} />
    },
    'الرؤيا والرسالة': {
      id: 4,
      component: <Vision content={visionAndMission} />
    },
    'شعار الجامعة': {
      id: 5,
      component: <Slogan content={UniversitySlogan} />
    },
    'الخطة الإستراتيجية': {
      id: 6,
      component: <Plan content={StrategicPlan} />
    },
    'مخطط تنظيمي': {
      id: 7,
      component: <Chart content={OrganizationalChart} />
    },
    'إدارة الجامعة': {
      id: 8,
      component: <Administration content={UniversityAdministration} />
    },
    'المكاتب والأقسام': {
      id: 9,
      component: <Offices content={OfficesAndDepartments} />
    },
    الاعتمادية: {
      id: 10,
      component: <Depend content={Dependability} />
    }
  }
  return (
    <div>
      {' '}
      <Tab.Group>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-0'>
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
