import { fetchData, fetchDataWithPopulate } from '@/app/api/route'

export async function getPageSettings(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'university-settings')
  // console.log(fetchedData.data)
  return fetchedData.data
}

export async function getAcademicAffairs(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'academic-affairs')
  return fetchedData.data
}

export async function getCollegesAndInstitutes(lang) {
  const fetchedData = await fetchData(lang, 'colleges-and-institutes')
  return fetchedData.data
}

export async function getUniversityHospitals(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'university-hospitals')
  return fetchedData.data
}

export async function getAllNews(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'news')
  return fetchedData.data
}

export async function getScientificResearch(lang) {
  const fetchedData = await fetchDataWithPopulate(
    lang,
    'scientific-research-postgraduate-studies'
  )
  return fetchedData.data
}

export async function getAllActivites(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'university-activites')

  return fetchedData.data
}

export async function getStudentLives(lang) {
  const fetchedData = await fetchData(lang, 'student-lives')
  return fetchedData.data
}

export async function getJobs(lang) {
  const fetchedData = await fetchData(lang, 'jobs')
  return fetchedData.data
}

export async function getAllUpcomingEvents(lang) {
  const fetchedData = await fetchData(lang, 'upcoming-events')
  return fetchedData.data
}

// GET THE LATEST POSTS FOR THE HOME PAGE

export async function getFeaturedNews(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'news')

  const size = 3
  // console.log(fetchedData)
  const featuredNews = fetchedData.data.slice(0, size)
  return featuredNews
}

export async function getFeaturedActivites(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, 'university-activites')

  const size = 3
  const featuredEvents = fetchedData.data.slice(0, size)
  return featuredEvents
}

export async function getFeaturedResearch(lang) {
  const fetchedData = await fetchDataWithPopulate(
    lang,
    'scientific-research-postgraduate-studies'
  )

  const size = 2
  const featuredResearch = fetchedData.data.slice(0, size)
  return featuredResearch
}

// ;`
// colleges-and-institutes
// university-hospitals
// news
// scientific-research-postgraduate-studies
// student-lives
// jobs
// upcoming-events
// `
