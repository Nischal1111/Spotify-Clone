import React from 'react'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from "react-icons/bs";
import {CgPlayTrackNext,CgPlayTrackPrev} from "react-icons/cg"
import {FiRepeat} from "react-icons/fi"

export default function Controls() {
  return (
    <div>
      <div className='shuffle'>
        <BsShuffle/>
      </div>
      <div className='prev--'>
        <CgPlayTrackPrev/>
      </div>
      <div className='play--'>
        {PlayerState ? <BsFillPauseCircleFill/>: <BsFillPlayCircleFill/>}
      </div>
      <div className='next--'>
        <CgPlayTrackNext/>
      </div>
      <div>
        <FiRepeat/>
      </div>
    </div>
  )
}
