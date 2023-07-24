import React from 'react'
import "../css/navbar.css"
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useStateProvider } from './sp'

export default function Navbar() {
  const [{user},dispatch]=useStateProvider()
  return (
    <div>
      <div className='header'>
        <div className='header--left'>
            <SearchIcon/>
            <input type='text' placeholder='Search for Artists, Songs or Podcasts...'></input>
        </div>
        <div className='header--right'>
            <Avatar src={user?.image} alt={user?.name} style={{width:"50px",height:"50px"}}></Avatar> 
            <h4>{user?.name}</h4>
        </div>
        </div>
    </div>
  )
}
