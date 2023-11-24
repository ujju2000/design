import React from 'react'
import Aside from '../components/aside/Aside'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/Navbar'

export default function VideoPage() {
  return (
    <div className = 'xl:h-[90%] h-[80%] w-11/12 bg-white border-solid border-black border-4 flex rounded-md'>
        <Aside />
        <div className = 'w-full h-full flex flex-col'>
          <Header />
          <Navbar />
          <Main />
        </div>
    </div>
  )
}
