import React from 'react'

function Single({params: {id}}) {
  return (
    <div className = "text-4xl">News {id}</div>
  )
}

export default Single