import React from 'react'
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa"
import { PiWechatLogoBold } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
export default function VideoCallComponents() {
    const components = ['cam', 'mic' , 'share', 'chat' , 'leave'];
  return (
      <div className = 'grid grid-cols-3 w-[90%] gap-2 mt-4'>
        {
            components.map(component => (
            <div className ='flex flex-col items-center'>
                <div className=  { component === 'leave' ? 'bg-teal-500 text-white p-2 text-2xl flex items-center justify-center rounded-lg'
                    : `bg-slate-100 p-2 text-2xl flex items-center justify-center rounded-lg`
                    }>{renderIcon(component)}</div>
                <span className = 'capitalize text-gray-500'>{component}</span>
            </div>))
        }
      </div>
  )

}

function renderIcon(component){
    switch(component) {
        case 'cam':
            return <GoDeviceCameraVideo />
        case 'mic' :
            return <IoMicOutline />
        case 'share':
            return <FaRegShareSquare />
        case 'chat' :
            return <PiWechatLogoBold />
        case 'leave':
            return <IoExitOutline />
    }
}
