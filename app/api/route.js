export async function fetchData(lang, endpoint) {
  const url = `https://admin.syrian-university.com/api/${endpoint}?locale=${lang}`
  const res = await fetch(url, {
    next: { revalidate: 10 }
  })
  const data = await res.json()

  return data
}

export async function fetchDataWithPopulate(lang, endpoint) {
  const url = `https://admin.syrian-university.com/api/${endpoint}?populate=*&locale=${lang}`
  const res = await fetch(url, {
    next: { revalidate: 10 }
  })
  const data = await res.json()

  return data
}
export async function fetchSingleData(id, endpoint) {
  const url = `https://admin.syrian-university.com/api/${endpoint}/${id}?populate=*`
  const res = await fetch(url, {
    next: { revalidate: 10 }
  })
  const data = await res.json()

  return data
}
