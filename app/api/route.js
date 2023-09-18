export async function fetchData(lang, endpoint) {
    const url = `http://localhost:1337/api/${endpoint}?locale=${lang}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data[0].attributes;
  }