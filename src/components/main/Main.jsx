import React from 'react'
import Preview from '../preview/Preview'
import VideoCall from '../videocallAndComponents/VideoCall'

export default function Main() {
  return (
    <div className = 'w-full p-7 h-full bg-grey-300 flex '>
        <VideoCall />
        <Preview />
    </div>
  )
}
