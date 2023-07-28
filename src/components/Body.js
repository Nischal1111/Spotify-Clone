import React, { useEffect } from 'react';
import "../css/body.css"
import { useStateProvider } from './sp';
import { reducerCases } from './constants';
import axios from 'axios';
import styled from 'styled-components';
import { AiFillClockCircle } from "react-icons/ai";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Body = () => {
  const [{ token, selectedPlaylistId, selectedplaylist }, dispatch] = useStateProvider();

  const minutes=(ms)=>{
    const mins=Math.floor(ms/60000)
    const secs=((ms%60000)/1000).toFixed(0)
    return mins+ ":" + (secs < 10? "0":""+secs)
  }
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
        description: response.data.description.startsWith("<a") ? "" : response.data.description,
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

      console.log(selectedplaylist.name);
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedplaylist });
    };

    getInitialPlaylist();
  }, [token, selectedPlaylistId, dispatch]);

  return (
    <Container>
      {selectedplaylist && (
        <>
          <div className="playlist" style={{ height: "40vh" }}>
            <div className="image">
              <img src={selectedplaylist.image} style={{ height: "15rem", boxShadow: "rgba(0,0,0,0.25) 0px 25px 50px -12px" }} alt="Playlist Cover" />
            </div>
            <div className="detail">
              <span>PLAYLIST</span>
              <h3 className="title">{selectedplaylist.name}</h3>
              <p className="desc">{selectedplaylist.description}</p>
            </div>
          </div>

          <div className='icons--body'>
            <PlayCircleFilledIcon className='player' />
            <FavoriteIcon fontSize='large' />
            <MoreHorizIcon />
          </div>

          <div className="listlist">
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
                <span><AiFillClockCircle style={{fontSize:"22px"}}/></span>
              </div>
            </div>
            <hr style={{width:"95%",marginLeft:"1.5rem",marginBottom:"1rem",marginTop:"-.5rem"}}></hr>
            <div className="track">
              {selectedplaylist.tracks.map(({ id, name, artists, image, album, duration, context_uri, track_number }, index) => {
                return (
                  <div className="row" key={id}>
                    <div className="col">
                      <span>{index + 1}</span>
                    </div>
                    <div className="col desc" style={{display:"flex", alignItems:"center"}}>
                      <div className="image">
                        <img src={image} alt="Track Cover" style={{height:"40px"}}/>
                      </div>
                      <div className="info" style={{marginLeft:"2rem",color:"aliceblue",display:"flex",flexDirection:"column"}}>
                        <span>{name}</span>
                        <span style={{fontSize:"13px",marginTop:"7px",color:" rgb(183, 181, 181)"}}>{artists.join(" , ")}</span>
                      </div>
                    </div>
                    <div className="col">
                      <span>{album}</span>
                    </div>
                    <div className="col">
                      <span>{minutes(duration)}</span>
                    </div>
                  </div>
                );
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
