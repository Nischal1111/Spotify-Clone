import React from 'react'
import "../css/navbar.css"
import SearchIcon from '@mui/icons-material/Search'

export default function Navbar() {
  return (
    <div>
      <div className='header'>
        <div className='header--left'>
            <SearchIcon/>
            <input type='text' placeholder='Search for Artists, Songs or Podcasts...'></input>
        </div>
        </div>
    </div>
  )
}
