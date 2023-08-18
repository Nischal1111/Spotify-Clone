import React, { useEffect } from 'react'
import axios from 'axios';
import { reducerCases } from './constants';
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from "react-icons/bs";
import {CgPlayTrackNext,CgPlayTrackPrev} from "react-icons/cg"
import {FiRepeat} from "react-icons/fi"
import { useStateProvider } from './sp';

export default function Controls() {
    const [{token,PlayerState},dispatch] = useStateProvider();
    const changetrack =async(type)=>{
      const response = await axios.get(`https://api.spotify.com/v1/me/player/${type}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      dispatch({ type: reducerCases.PlayerState, PlayerState});
    }

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className='shuffle'>
        <BsShuffle/>
      </div>
      <div className='prev--'>
        <CgPlayTrackPrev onClick={changetrack(type)}/>
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
