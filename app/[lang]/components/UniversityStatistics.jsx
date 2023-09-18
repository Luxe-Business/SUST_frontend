"use client"
import React from 'react';
import { useState,useEffect } from 'react';
const UniversityStatistics = ({page}) => {
  const {home: {stats}} = page;
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter <7645){
        setCounter((prevCount)=>prevCount +10)
      } else {
        clearInterval(interval)
      }
    },1);
    return ()=>clearInterval(interval)
  },[counter])
  return (
    <section  className=" py-56 px-10 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-black mb-4">{stats.title}</h2>
        <div className="flex justify-between p-4 items-center">
          <div className=" p-8 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <div className='flex justify-center items-center flex-col'>
              <p className="text-[#2386C8] text-center text-xl m-1 font-semibold">{stats.counterSt}</p>
              <p className=" text-[#204157] text-center text-xl m-1 font-semibold">{`${counter+233}`}</p>
            </div>
          </div>
          <div className=" p-8 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <div>
              <p className="text-[#2386C8] text-center text-xl m-1 font-semibold">{stats.CounterGS}</p>
              <p className="text-[#204157] text-center text-xl m-1 font-semibold">{counter-200}</p>
            </div>
          </div>
          <div className=" p-8 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <div>
              <p className="text-[#2386C8] text-center text-xl m-1 font-semibold">{stats.CounterStHi}</p>
              <p className="text-[#204157] text-center text-xl m-1 font-semibold">{counter}</p>
            </div>
          </div>
          <div className=" p-8 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <div>
              <p className="text-[#2386C8] text-center text-xl m-1 font-semibold">{stats.CounterHi}</p>
              <p className="text-[#204157] text-center text-xl m-1 font-semibold">{counter-1000}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UniversityStatistics;