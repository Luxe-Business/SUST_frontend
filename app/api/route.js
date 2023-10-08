export async function fetchData(lang, endpoint) {
  const url = `https://ambitious-warmth-a158024e45.strapiapp.com/api/${endpoint}?locale=${lang}`
  const res = await fetch(url, {
    cache: 'force-cache'
  })
  const data = await res.json()

  return data
}

export async function fetchDataWithPopulate(lang, endpoint) {
  const url = `https://ambitious-warmth-a158024e45.strapiapp.com/api/${endpoint}?populate=*&locale=${lang}`
  const res = await fetch(url, {
    cache: 'force-cache'
  })
  const data = await res.json()

  return data
}
export async function fetchSingleData(id, endpoint) {
  const url = `https://ambitious-warmth-a158024e45.strapiapp.com/api/${endpoint}/${id}?populate=*`
  const res = await fetch(url, {
    cache: 'force-cache'
  })
  const data = await res.json()

  return data
}
