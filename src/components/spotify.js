import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
import axios from 'axios'
import "../css/main.css"
import styled from "styled-components"
import Side from './side'
import { useStateProvider } from './sp'
import { reducerCases } from './constants'

const Spotify = () => {
    const [{token},dispatch] =useStateProvider()
    useEffect(()=>{
       const getUser = async () => {
  try {
    const data = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });

    console.log('Spotify API Response:', data); // Log the entire data object

    const userInfo = {
      userId: data.id,
      userName: data.display_name,
    };

    console.log('User Info:', userInfo); // Log the user info

    dispatch({ type: reducerCases.SET_USER, userInfo });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
        getUser();
    },[token,dispatch]);
  return (
    <>
    <Container>
        <div className="spotify--body">
            <Side/>
            <div className="body">
                <Navbar/>
                <div className="body--content">
                    <Body/>
                </div>
            </div>
        </div>
        <div className="spotify--footer">
            <Footer/>
        </div>
    </Container>
    </>
  )
}
const Container = styled.div`
    max-width: 100vw;
    overflow:hidden;
    max-height: 100vh;
    display: grid;
    grid-template-rows: 88vh 12vh;
}
`

export default Spotify
