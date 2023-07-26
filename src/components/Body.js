import React, { useEffect } from 'react';
import "../css/body.css"
import { useStateProvider} from './sp';
import { reducerCases } from './constants';
import axios from 'axios';
import styled from 'styled-components';
import {AiFillClockCircle} from "react-icons/ai"

const Body = () => {
  const [{ token ,selectedPlaylistId, selectedplaylist}, dispatch] = useStateProvider();
  useEffect(() => {
  const getInitialPlaylist = async () => {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });

    const selectedplaylist = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.images[0].url,
      description:response.data.description.startsWith("<a")?"":response.data.description,
      tracks: response.data.tracks.items.map(({ track }) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map((artist) => artist.name),
        image: track.album.images[2].url,
        duration: track.duration_ms,
        album: track.album.name,
        context_uri: track.album.uri,
        track_number: track.track_number,
      })),
    };
    console.log(selectedplaylist.name)
    dispatch({ type: reducerCases.SET_PLAYLIST, selectedplaylist })
  };

  getInitialPlaylist();
}, [token, selectedPlaylistId, dispatch]);

  return (
    <Container>
      {selectedplaylist && (
        <>
          <div className="playlist">
            <div className="image">
              <img src={selectedplaylist.image}/>
            </div>
            <div className="detail">
              <span>PLAYLIST</span>
              <h3 className="name">{selectedplaylist.name} </h3>
              <p className="desc">{selectedplaylist.description}</p>
            </div>
          </div>
          <div className="list">
            <div className="header">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span><AiFillClockCircle/></span>
              </div>
            </div>
            <div className="track">
              {selectedplaylist.tracks.map(({
                id,name,
                artists,image,
                album,duration,
                context_uri,track_number},index)=>{
                  return (<>
                  <div className="row" key={id}>
                      <div className="col">
                        <span>{index+1}</span>
                      </div>
                      <div className="col desc">
                        <div className="image">
                        <img src={image}/>
                        </div>
                        <div className="info">
                          <span>{name}</span>
                          <span>{artists}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{album}</span>
                      </div>
                      <div className="col">
                        <span>{duration}</span>
                      </div>
                  </div>
                  </>
                  )
                })}
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`

`;

export default Body;
