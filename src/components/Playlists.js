import React, { useEffect } from 'react'
import { useStateProvider } from './sp'
import { reducerCases } from './constants';
import axios from 'axios';

function Playlists() {
    const [{token,playlists},dispatch]=useStateProvider();
    useEffect(() => {
        const getPlaylist = async () => {
        const response = await axios.get(
            'https://api.spotify.com/v1/me/playlists',
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            }
            );
            const {items}=response.data;
            const playlists=items?.map(({name,id})=>{
            return {name,id}
        })
        dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
        }
        getPlaylist();
    }, [token, dispatch]);
    return (
    <div>
        <ul>
        {playlists.map(({name,id})=>{
            return (
                <li key={id} >{name}</li>
            )
        })}
        </ul>
    </div>
    )
}

export default Playlists
