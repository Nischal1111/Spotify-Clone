import React, { useEffect } from 'react'
import { useStateProvider } from './sp'
import "../css/body.css"
import axios from 'axios';
import { reducerCases } from './constants';
import styled from "styled-components"

export default function Body() {
  const [{token,selectedPlaylistId,selectedPlaylist},dispatch]=useStateProvider();
  useEffect(()=>{
    const getInitialPlaylist=async()=>{
      const response = await axios.get(`https://api.spotify.com/v1/playlists/73uqBsL58hvh5Tgarkvu6d`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    const selectedPlaylist={
      id:response.data.id,
      name:response.data.name,
      image:response.data.images[0].url,
      tracks:response.data.tracks.items.map(({track})=>({
        id:track.id,
        name:track.name,
        artists:track.artists.map((artist)=>artist.name),
        image:track.album.images[2].url,
        duration:track.duration_ms,
        album:track.album.name,
        context_uri:track.album.uri,
        track_number:track.track_number

      }))
    }
    console.log(selectedPlaylist)
    dispatch({type:reducerCases.selectedPlaylist,selectedPlaylist})
    }
    getInitialPlaylist()
  },[token,dispatch,selectedPlaylistId])
  return <Container>
        {selectedPlaylist && (
          <>
        <div className="playlist">
          <div className="image">
            <img src={selectedPlaylist.image}/>
          </div>
          <div className="details">
            <span>PLAYLIST</span>
            <span className="title">{selectedPlaylist.name}</span>
          </div>
        </div>
      </>
    )}
  </Container>
}
const Container = styled.div`
   
}
`