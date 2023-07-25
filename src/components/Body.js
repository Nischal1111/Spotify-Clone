import React, { useEffect } from 'react';
import { useStateProvider} from './sp';
import { reducerCases } from './constants';
import axios from 'axios';
import styled from 'styled-components';

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
          <PlaylistHeader>
            <PlaylistImage src={selectedplaylist.image} alt="Playlist Cover" />
            <PlaylistDetails>
              <span>PLAYLIST</span>
              <span className="title">{selectedplaylist.name}</span>
            </PlaylistDetails>
          </PlaylistHeader>
          <SongList>
            {selectedplaylist.tracks.map((song) => (
              <SongItem key={song.id}>
                <SongImage src={song.image} alt="Song Cover" />
                <SongDetails>
                  <span>{song.name}</span>
                  <span>{song.artists.join(', ')}</span>
                </SongDetails>
              </SongItem>
            ))}
          </SongList>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PlaylistImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 20px;
`;

const PlaylistDetails = styled.div`
  & > span {
    font-size: 14px;
    color: #b3b3b3;
  }

  .title {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
  }
`;

const SongList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SongItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SongImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  margin-right: 10px;
`;

const SongDetails = styled.div`
  & > span {
    display: block;
    font-size: 14px;
    color: #b3b3b3;
  }

  span:first-child {
    color: #fff;
    font-weight: bold;
  }
`;

export default Body;
