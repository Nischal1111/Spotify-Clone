import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
import "../css/main.css"
import styled from "styled-components"
import Side from './side'

const Spotify = () => {
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
