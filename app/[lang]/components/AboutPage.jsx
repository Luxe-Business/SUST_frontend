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
  data,
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
    about_collage: {
      id: 1,
      title: data.about_collage,
      component: <About content={aboutUniversity} />
    },
    welcome_message: {
      id: 2,
      title: data.welcome_message,
      component: <Greeting content={PrWelcomeMessagey} image={persImage} />
    },
    collage_policy: {
      id: 3,
      title: data.collage_policy,
      component: <Policy content={universityPolicy} />
    },
    vision: {
      id: 4,
      title: data.vision,
      component: <Vision content={visionAndMission} />
    },
    collage_flag: {
      id: 5,
      title: data.collage_flag,
      component: <Slogan content={UniversitySlogan} />
    },
    startigic_plan: {
      id: 6,
      title: data.startigic_plan,
      component: <Plan content={StrategicPlan} />
    },
    chart: {
      id: 7,
      title: data.chart,
      component: <Chart content={OrganizationalChart} />
    },
    collage_administration: {
      id: 8,
      title: data.collage_administration,
      component: <Administration content={UniversityAdministration} />
    },
    offices: {
      id: 9,
      title: data.offices,
      component: <Offices content={OfficesAndDepartments} />
    },
    reliability: {
      id: 10,
      title: data.reliability,
      component: <Depend content={Dependability} />
    }
  }
  return (
    <div>
      {' '}
      <Tab.Group>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-0'>
          <Tab.List className='rounded-xlpx-5 flex w-72 flex-col space-x-1'>
            {Object.values(categories).map(category => (
              <Tab
                key={category.id}
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
                {category.title}
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
