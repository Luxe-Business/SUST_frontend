import React from 'react'
const axios = require('axios')

const getNewDogs = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { revalidate: 10 }
  })

  const data = await response.json()
  console.log('hello this form the getNewDogs function', data)
  return await data.message
}

// async () => {
//   const dogslink = await axios

//     .get('https://dog.ceo/api/breeds/image/random', {
//       cache: 'no-cache'

//       //   next: {  }
//     })
//     .then(async function (response) {
//       console.log(response.data.message)
//       return await response.data
//     })
//   return dogslink.message
// }

export default getNewDogs
