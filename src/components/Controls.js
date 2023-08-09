import React, { useEffect } from 'react'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from "react-icons/bs";
import {CgPlayTrackNext,CgPlayTrackPrev} from "react-icons/cg"
import {FiRepeat} from "react-icons/fi"
import { useStateProvider } from './sp';

export default function Controls() {
    const [{token},dispatch] = useStateProvider();
    useEffect(() => {
    const getPlayState = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
        const {item}=response.name
      dispatch({ type: reducerCases.SET_PLAYER_STATE, PlayerState });
    };
    getPlayState();
  }, [token, dispatch]);

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
