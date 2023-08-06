import React from 'react'
import Adults from '../Components/Adults';
import Class from '../Components/Class';
import SrcDest from '../Components/SrcDest';
import INR from '../Components/INR'

const Section1 = () => {
  return (
    <div className='w-[100%] md:p-10 p-5 flex justify-center items-center flex-col'>
      {/* Heading */}
      <h2 className='font-semibold md:text-4xl text-2xl text-white '>Flight Fare</h2>
      <div className="w-[100%] my-8 rounded-xl bg-[#1e1e1e] opacity-[35%] border-[#7d7d7d] p-5 border-2">
        <div className="">
          <Adults />
          <Class />
          <INR />
        </div>
      </div>
    </div>
  )
}

export default Section1