import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
export default function Header() {
  return (
    <div className = ' h-20 w-full p-4 flex items-center '>

        <div className = 'mx-3 p-4 bg-slate-50 flex items-center justify-center rounded-lg '>
            <FaChevronLeft color='grey' />
        </div>
        <div className='capitalize font-bold text-2xl grow'>
            <h1>Basic Mathematics 101</h1>
        </div>
        <div className = 'basis-[150px] flex items-center justify-start mr-5 '>
            <span className='p-2 bg-blue-700 text-white rounded-full mr-2'><IoCallSharp size  = {20} /></span>
            <h5 className = 'font-bold'>
                Call Teacher
            </h5>
        </div>
        <div className = 'basis-[150px] flex items-center justify-start'>
            <span className='p-2 bg-orange-500 text-white rounded-full mr-2' ><FaUser size = {20}/></span>
            <h6 className = 'font-bold '>Support</h6>
        </div>
    </div>
  )
}
