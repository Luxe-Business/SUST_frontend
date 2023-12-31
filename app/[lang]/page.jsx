import { getDictionary } from '@/lib/dictionary'
import LastNews from './components/LastNews'
import Activities from './components/Activities'
import ContactUs from './components/ContactUs'
import UniversityStatistics from './components/UniversityStatistics'
import ResearchSi from './components/ResearchSi'
import HeroWraper from '@/app/[lang]/components/HeroWraper'

import { getPageSettings } from '@/app/libs/getAllData'

export async function generateMetadata({ params: { lang } }) {
  // read route params

  const { pages } = await getDictionary(lang)

  // fetch data

  return {
    title: `${pages.home?.title} | SUST`,
    description: pages.home?.description || ''
    // keywords: seo.keywords?.split(' ') || ''
  }
}

export default async function Home({ params: { lang } }) {
  const { pages } = await getDictionary(lang)

  const pageSettingsData = await getPageSettings(lang)
  //  let error = false;

  //  console.log(pageSettingsData)
  // const checkData = () => {
  //   if (pageSettingsData == []) {
  //     error = true;
  //     console.log('There is no Data in this language Yet')

  //   } else {
  //     error = false;
  //     return pageSettingsData}
  // }

  //  checkData()

  if (pageSettingsData.length == 0) {
    return (
      <div className='container'>
        <h1 className='text-center text-6xl font-bold text-red-500'>
          Please Add some settings for this language
        </h1>
      </div>
    )
  }

  return (
    <>
      <HeroWraper lang={lang} />
      <div className='container py-20'>
        <LastNews page={pages.home} lg={lang} />
        <Activities page={pages.home} lg={lang} />
        <UniversityStatistics
          page={pages.home}
          studenstNumber={
            pageSettingsData[0]?.attributes.Number_of_university_students
          }
          postGraduateNumber={
            pageSettingsData[0]?.attributes.postgraduate_students
          }
          universityGraduatesNumber={
            pageSettingsData[0]?.attributes.university_graduates
          }
          postGraduateGraduatesNumber={
            pageSettingsData[0]?.attributes.postgraduate_graduates
          }
        />
        <ResearchSi page={pages.home} lg={lang} />
        <ContactUs page={pages.home} lang={{ lang }} />
      </div>
    </>
  )
}
