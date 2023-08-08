import React from 'react'
import "../css/footer.css"
import Current from './Current'
import Controls from './Controls'

export default function Footer() {
  return (
    <div className='footer'>
      <Current/>
      <Controls/>
    </div>
  )
}
