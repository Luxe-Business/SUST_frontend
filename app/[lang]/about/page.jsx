import AboutPage from '../components/AboutPage'
import { getDictionary } from '@/lib/dictionary'
import { getPageSettings } from '@/app/libs/getAllData'

export default async function Example({ params: { lang } }) {
  const { page } = await getDictionary(lang)
  const pageSettingsData = await getPageSettings(lang)

  // console.log(pageSettingsData)
  if (pageSettingsData.length == 0) {
    return (
      <div className='container'>
        <h1 className='text-center text-6xl font-bold text-red-500'>
          This Page Data is Empty
        </h1>
      </div>
    )
  }

  const aboutUniversity = pageSettingsData[0]?.attributes.About_university
  const PrWelcomeMessage =
    pageSettingsData[0]?.attributes.University_President_welcome_message
  const universityPolicy = pageSettingsData[0]?.attributes.University_policy
  const visionAndMission = pageSettingsData[0]?.attributes.Vision_and_mission
  const UniversitySlogan = pageSettingsData[0]?.attributes.University_slogan
  const StrategicPlan = pageSettingsData[0]?.attributes.strategic_plan
  const OrganizationalChart =
    pageSettingsData[0]?.attributes.Organizational_Chart
  const UniversityAdministration =
    pageSettingsData[0]?.attributes.University_administration
  const OfficesAndDepartments =
    pageSettingsData[0]?.attributes.Offices_and_departments
  const Dependability = pageSettingsData[0]?.attributes.Dependability

  const persImage =
    pageSettingsData[0]?.attributes.president_image.data?.attributes.formats
      .thumbnail.url

  return (
    <div className='container w-full'>
      <AboutPage
        lang={lang}
        aboutUniversity={aboutUniversity}
        PrWelcomeMessagey={PrWelcomeMessage}
        universityPolicy={universityPolicy}
        UniversitySlogan={UniversitySlogan}
        StrategicPlan={StrategicPlan}
        OrganizationalChart={OrganizationalChart}
        UniversityAdministration={UniversityAdministration}
        OfficesAndDepartments={OfficesAndDepartments}
        Dependability={Dependability}
        visionAndMission={visionAndMission}
        persImage={persImage}
      />
    </div>
  )
}
