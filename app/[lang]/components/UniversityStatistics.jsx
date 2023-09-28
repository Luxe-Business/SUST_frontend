'use client'
import React from 'react'
// import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function Counter({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 }
  })
  return (
    <animated.p className='m-1 text-center text-xl font-semibold text-[#204157]'>
      {number.to(n => n.toFixed(0))}
    </animated.p>
  )
}

const UniversityStatistics = ({
  page,

  studenstNumber,
  postGraduateNumber,
  universityGraduatesNumber,
  postGraduateGraduatesNumber
}) => {
  const {
    home: { stats }
  } = page
  // const [studentsCounter, setStudentsCounter] = useState(studenstNumber)

  // const [postgraduatesCounter, setPostgraduatesCounter] =
  //   useState(postGraduateNumber)
  // const [graduatesCounter, setGraduatesCounter] = useState(
  //   universityGraduatesNumber
  // )
  // const [postGrGraduatesCounter, setPostGrGraduatesCounter] = useState(
  //   postGraduateGraduatesNumber
  // )

  // useEffect(() => {
  //   const studentsinterval = setInterval(() => {
  //     if (studentsCounter < studenstNumber) {
  //       setStudentsCounter(prevCount => prevCount + 1000)
  //     } else {
  //       clearInterval(studentsinterval)
  //     }
  //   }, 1)
  //   const postgraduatesInterval = setInterval(() => {
  //     if (postgraduatesCounter < postGraduateNumber) {
  //       setPostgraduatesCounter(prevCount => prevCount + 1000)
  //     } else {
  //       clearInterval(postgraduatesInterval)
  //     }
  //   }, 1)
  //   const graduatesInterval = setInterval(() => {
  //     if (graduatesCounter < universityGraduatesNumber) {
  //       setGraduatesCounter(prevCount => prevCount + 1000)
  //     } else {
  //       clearInterval(graduatesInterval)
  //     }
  //   }, 1)
  //   const postGrGraduatesInterval = setInterval(() => {
  //     if (postGrGraduatesCounter < postGraduateGraduatesNumber) {
  //       setPostGrGraduatesCounter(prevCount => prevCount + 1000)
  //     } else {
  //       clearInterval(postGrGraduatesInterval)
  //     }
  //   }, 100)
  //   // return () =>
  //   //   clearInterval(
  //   //     studentsinterval,
  //   //     postgraduatesInterval,
  //   //     graduatesInterval,
  //   //     postGrGraduatesInterval
  //   //   )
  // }, [
  //   studentsCounter,
  //   studenstNumber,
  //   postGrGraduatesCounter,
  //   postGraduateGraduatesNumber,
  //   graduatesCounter,
  //   universityGraduatesNumber,
  //   postgraduatesCounter,
  //   postGraduateNumber
  // ])

  return (
    <section className=' rounded-lg px-10 py-56'>
      <div className='container mx-auto'>
        <h2 className='mb-4 text-center text-4xl font-bold text-black'>
          {stats.title}
        </h2>
        <div className='flex flex-col items-center justify-between gap-4 p-4 md:flex-row'>
          <div className=' flex transform items-center rounded-lg border-2 border-white p-8 shadow-md hover:scale-105'>
            <div className='flex flex-col items-center justify-center'>
              <p className='m-1 text-center text-xl font-semibold text-[#2386C8]'>
                {stats.counterSt}
              </p>
              <div>
                <Counter n={studenstNumber} />
              </div>
            </div>
          </div>
          <div className=' flex transform items-center rounded-lg border-2 border-white p-8 shadow-md hover:scale-105'>
            <div>
              <p className='m-1 text-center text-xl font-semibold text-[#2386C8]'>
                {stats.CounterGS}
              </p>
              <div>
                <Counter n={postGraduateNumber} />
              </div>
            </div>
          </div>
          <div className=' flex transform items-center rounded-lg border-2 border-white p-8 shadow-md hover:scale-105'>
            <div>
              <p className='m-1 text-center text-xl font-semibold text-[#2386C8]'>
                {stats.CounterStHi}
              </p>
              <div>
                <Counter n={universityGraduatesNumber} />
              </div>
            </div>
          </div>
          <div className=' flex transform items-center rounded-lg border-2 border-white p-8 shadow-md hover:scale-105'>
            <div>
              <p className='m-1 text-center text-xl font-semibold text-[#2386C8]'>
                {stats.CounterHi}
              </p>
              <div>
                <Counter n={postGraduateGraduatesNumber} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UniversityStatistics
