import React, { useEffect } from 'react';
import axios from 'axios';
import { reducerCases } from './constants';
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from './sp';

export default function Controls() {
  const [{ token, PlayerState }, dispatch] = useStateProvider();

  // Function to change the track
  const changeTrack = async (type) => {
  try {
    await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });

    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.item) {
      const { item } = response.data;
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist) => artist.name),
        image: item.album.images[0].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
    }
  } catch (error) {
    console.error('Error changing track:', error);
    // Handle the error here (e.g., display an error message, retry logic, etc.)
  }
};


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className='shuffle'>
        <BsShuffle />
      </div>
      <div className='prev--'>
        <CgPlayTrackPrev onClick={() => changeTrack('previous')} />
      </div>
      <div className='play--'>
        {PlayerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className='next--'>
        <CgPlayTrackNext onClick={() => changeTrack('next')} />
      </div>
      <div>
        <FiRepeat />
      </div>
    </div>
  );
}
