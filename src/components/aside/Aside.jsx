import React from 'react'
import { LuAlignLeft } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { HiMiniChartBar } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import classes from './styles.module.css';
export default function Aside() {
  return (
    <div className='relative h-full w-[4%] bg-slate-50 flex flex-col  items-center'>
        <div className = 'mb-3'>
            <img src="assets/logo.png" alt="" />
        </div>
        <div className = {`${classes.asideOptions} basis-8/12 flex flex-col justify-around `}>
            <LuAlignLeft size = {25}/>
            <div className = {classes.notifications}>
            <IoNotifications size = {25} />
            </div>
            <CiClock1 size = {25} />
            <BiTask size = {25} />
            <IoEyeOutline size = {25}/>
            <FaUserGroup size = {25}/>
            <HiMiniChartBar size = {25} />
        </div>

        <FaCircleUser size = {30} className = 'absolute bottom-10 '/>
    </div>
  )
}
