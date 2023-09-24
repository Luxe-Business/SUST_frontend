export async function fetchData(lang, endpoint) {
    const url = `https://ambitious-warmth-a158024e45.strapiapp.com/api/${endpoint}?locale=${lang}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.data[0].attributes;
  }