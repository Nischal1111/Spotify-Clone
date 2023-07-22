import React from 'react'
import "../css/sidebar.css"
import Menu from './Menu'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Playlists from './Playlists';

function Side() {
  return (
    <div className='sidebar'>
    <img className='logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify'></img>
    <Menu Icon={HomeIcon} title="Home"/>
    <Menu Icon={SearchIcon} title="Search"/>
    <Menu Icon={LibraryMusicIcon} title="Your Library"/>
    <br></br>
    <strong className='sidebar--play'>PLAYLISTS</strong>
    <hr/>
    <Playlists/>
    </div>
  )
}

export default Side