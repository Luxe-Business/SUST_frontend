import { getDictionary } from '@/lib/dictionary'
import LastNews from './components/LastNews'
import Activities from './components/Activities'
import ContactUs from './components/ContactUs'
import UniversityStatistics from './components/UniversityStatistics'
import ResearchSi from './components/ResearchSi'

import { getPageSettings } from '@/app/libs/getAllData'

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang)

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
    <div className='container'>
      <LastNews page={page} lg={lang} />
      <Activities page={page} lg={lang} />
      <UniversityStatistics
        page={page}
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
      <ResearchSi lg={lang} />
      <ContactUs page={page} lang={{ lang }} />
    </div>
  )
}
