import {
  getAllUpcomingEvents,
  getScientificResearch,
  getAllNews,
  getCollegesAndInstitutes,
  getAllActivites
} from '@/app/libs/getAllData'

export default async function sitemap() {
  const baseUrlAr = 'https://www.syrian-university.com/ar'

  // Get All news from CMS
  const news = await getAllNews('ar')
  const newsUrls =
    news?.map(news => {
      return {
        url: `${baseUrlAr}/news/${news.id}`,
        lastModified: new Date()
      }
    }) ?? []

  // get all upcoming events pages
  const events = await getAllUpcomingEvents('ar')
  const eventsUrl =
    events?.map(event => {
      return {
        url: `${baseUrlAr}/events/${event.id}`,
        lastModified: new Date()
      }
    }) ?? []

  // Get All Colleges from CMS
  const colleges = await getCollegesAndInstitutes('ar')
  const collegesUrl =
    colleges?.map(college => {
      return {
        url: `${baseUrlAr}/Colleges/${college.id}`,
        lastModified: new Date()
      }
    }) ?? []
  // Get All Reasearchs from CMS
  const researchs = await getScientificResearch('ar')
  const researchsUrl =
    researchs?.map(research => {
      return {
        url: `${baseUrlAr}/research/${research.id}`,
        lastModified: new Date()
      }
    }) ?? []
  // Get All Activites from CMS
  const activites = await getAllActivites('ar')
  const activitesUrl =
    activites?.map(activity => {
      return {
        url: `${baseUrlAr}/activites/${activity.id}`,
        lastModified: new Date()
      }
    }) ?? []
  /////////////////////////////////////////////////////////////////

  const baseUrlEn = 'https://www.syrian-university.com/en'

  // Get All news from CMS
  const newsEn = await getAllNews('en')
  const newsUrlsEn =
    newsEn?.map(news => {
      return {
        url: `${baseUrlEn}/news/${news.id}`,
        lastModified: new Date()
      }
    }) ?? []

  // get all upcoming events pages
  const eventsEn = await getAllUpcomingEvents('en')
  const eventsUrlEn =
    eventsEn?.map(event => {
      return {
        url: `${baseUrlEn}/events/${event.id}`,
        lastModified: new Date()
      }
    }) ?? []

  // Get All Colleges from CMS
  const collegesEn = await getCollegesAndInstitutes('en')
  const collegesUrlEn =
    collegesEn?.map(college => {
      return {
        url: `${baseUrlEn}/Colleges/${college.id}`,
        lastModified: new Date()
      }
    }) ?? []
  // Get All Reasearchs from CMS
  const researchsEn = await getScientificResearch('en')
  const researchsUrlEn =
    researchsEn?.map(research => {
      return {
        url: `${baseUrlEn}/research/${research.id}`,
        lastModified: new Date()
      }
    }) ?? []
  // Get All Activites from CMS
  const activitesEn = await getAllActivites('en')
  const activitesUrlEn =
    activitesEn?.map(activity => {
      return {
        url: `${baseUrlEn}/activites/${activity.id}`,
        lastModified: new Date()
      }
    }) ?? []
  /////////////////////////////////////////////////////////////////////////
  const baseUrlTr = 'https://www.syrian-university.com/tr'

  // Get All news from CMS
  const newsTr = await getAllNews('tr')
  const newsUrlsTr =
    newsTr?.map(news => {
      return {
        url: `${baseUrlTr}/news/${news.id}`,
        lastModified: new Date()
      }
    }) ?? []

  // get all upcoming events pages
  const eventsTr = await getAllUpcomingEvents('tr')
  const eventsUrlTr =
    eventsTr?.map(event => {
      return {
        url: `${baseUrlTr}/events/${event.id}`,
        lastModified: new Date()
      }
    }) ?? []

  // Get All Colleges from CMS
  const collegesTr = await getCollegesAndInstitutes('tr')
  const collegesUrlTr =
    collegesTr?.map(college => {
      return {
        url: `${baseUrlTr}/Colleges/${college.id}`,
        lastModified: new Date()
      }
    }) ?? []
  // Get All Reasearchs from CMS
  const researchsTr = await getScientificResearch('tr')
  const researchsUrlTr =
    researchsTr?.map(research => {
      return {
        url: `${baseUrlTr}/research/${research.id}`,
        lastModified: new Date()
      }
    }) ?? []
  // Get All Activites from CMS
  const activitesTr = await getAllActivites('tr')
  const activitesUrlTr =
    activitesTr?.map(activity => {
      return {
        url: `${baseUrlTr}/activites/${activity.id}`,
        lastModified: new Date()
      }
    }) ?? []

  return [
    {
      url: baseUrlAr,
      lastModified: new Date()
    },
    {
      url: baseUrlEn,
      lastModified: new Date()
    },
    {
      url: baseUrlTr,
      lastModified: new Date()
    },
    ...newsUrls,
    ...eventsUrl,
    ...collegesUrl,
    ...researchsUrl,
    ...activitesUrl,
    ...newsUrlsEn,
    ...eventsUrlEn,
    ...collegesUrlEn,
    ...researchsUrlEn,
    ...activitesUrlEn,
    ...newsUrlsTr,
    ...eventsUrlTr,
    ...collegesUrlTr,
    ...researchsUrlTr,
    ...activitesUrlTr
  ]
}
