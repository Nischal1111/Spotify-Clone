import React from 'react'
import "../Css/song.css"

const Song = ({track}) => {
  return (<>
    <div className='song'>
        <img src={track.album.images[0].url} alt="" />
        <div className="song--info">
            <h1>{track.name}</h1>
            <p>{track.artists.map((artist)=>artist.name).join(", ")} - {" "}{track.album.name} </p>
            
        </div>
    </div>
  </>)
}

export default Song
