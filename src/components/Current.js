import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { reducerCases } from './constants';
import { useStateProvider } from './sp'
import "../css/footer.css"

 export default  function Current() {
    const [{token,currentlyPlaying},dispatch] = useStateProvider()
    useEffect(() => {
    const getSong = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      if (response!==""){
        const {item}=response.data
        const currentlyPlaying={
            id:item.id,
            name:item.name,
            artists:item.artists.map((artist)=>artist.name),
            image:item.album.images[0].url
        }
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying});
      }
    };
    getSong();
  }, [token, dispatch]);
  return (
    <div>
      {currentlyPlaying && (
        <div className="song">
            <div className="image">
                <img src={currentlyPlaying.image} style={{objectFit:"cover",height:"50px"}}
                />
            </div>
            <div className="info__song">
                <h4>{currentlyPlaying.name}</h4>
                <h6>
                    {currentlyPlaying.artists.join(",")}
                </h6>
            </div>
            <div></div>
        </div>
      )}
    </div>
  )
}
