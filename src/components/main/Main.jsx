import React from 'react'
import Preview from '../preview/Preview'
import VideoCall from '../videocallAndComponents/VideoCall'

export default function Main() {
  return (
    <div className = 'w-[96%] mx-auto p-4  lg:h-full xl:h-[70%] flex items-center '>
        <VideoCall />
        <Preview />
    </div>
  )
}
