import React from 'react'
import { Tab } from '@headlessui/react'
import { SiGoogleclassroom } from "react-icons/si";
import { PiTelevisionSimple } from "react-icons/pi";
import { BsPlayBtn } from "react-icons/bs";
import { RiSlideshow2Line } from "react-icons/ri"
import { GrDocumentText } from "react-icons/gr";
import { GrDocumentPpt } from "react-icons/gr";
export default function Navbar() {
    const tabs = ['classroom','whiteboard','videos','slideshow','documents','Doc.Cam'];
  return (
    <div className = 'bg-slate-100 w-[96%] mx-auto rounded-full h-20 p-4 flex text-gray-500'>
    <Tab.Group>
      <Tab.List className = 'w-11/12 flex justify-around items-center text-xl '>
        {
            
            tabs.map((tab) => <Tab className = 'flex items-center hover:bg-white hover:text-black px-6 py-4 rounded-full focus:ring hover:transition hover:ease-in-out'>
                <span className= 'mr-2'> {renderIcon(tab)} </span>
                <h4 className = 'capitalize'>{tab} </h4>
            </Tab>)
        }
      </Tab.List>
    </Tab.Group>
    </div>
  )
}

function renderIcon(title) {
    switch(title) {
        case 'classroom' : 
            return <SiGoogleclassroom />
        case 'whiteboard' :
            return <PiTelevisionSimple />
        case 'videos' :
            return <BsPlayBtn />
        case 'slideshow' :
            return <RiSlideshow2Line />
        case 'documents' :
            return <GrDocumentText />
        case 'Doc.Cam' :
            return <GrDocumentPpt />
        default :
            return 'Not Found'
    }
}