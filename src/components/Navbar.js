import React from 'react'
import "../css/navbar.css"
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useStateProvider } from './sp'

export default function Navbar() {
  const [{info},dispatch]=useStateProvider()
  return (

    <div>
      <div className='header'>
        <div className='header--left'>
            <SearchIcon/>
            <input type='text' placeholder='Search for Artists, Songs or Podcasts...'></input>
        </div>
        {/* <div className='header--right'>
            <Avatar src={info?.images[0]?.url} alt={info?.userName}></Avatar>
            <h4>{info?.userName}</h4>
        </div> */}
        </div>
    </div>
  )
}
