
import React from 'react'
import classes from './styles.module.css';
import VideoCallComponents from './VideoCallComponents';

export default function VideoCall() {
  return (
    <div className = 'flex flex-col items-center'>

        <div className = {classes.user}>
            <div className= {classes.teacherName}>Ridha</div>
        </div>

        <div className= {classes.teacher}>
            <h2 className = {classes.teacherName}>Mrs. Kaur</h2>
        </div>

        <VideoCallComponents />
    </div>
  )
}
