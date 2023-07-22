import React from 'react'
import "../css/login.css"

const Login = () => {
    const handleClick = ()=>{
    const autorizeUrl = "https://accounts.spotify.com/authorize"
    const redirect="http://localhost:3000/"
        const clientid="42f5a3c23a52424384551c81b8177712"

    const scopes=[
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-playback-position",
    "user-top-read",
    ]
    window.location.href=`${autorizeUrl}?client_id=${clientid}&redirect_uri=${redirect}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`
    }
    return (
    <div className='login'>
    <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify'></img>
    <a onClick={handleClick}>Login with Spotify</a>
    </div>
    )
}

export default Login