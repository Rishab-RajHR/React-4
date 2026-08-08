import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
       <h2>About</h2>
       <li><Link to='/employee/alex/22'>Alex</Link></li>
       <li><Link to='/employee/tovino/24'>Tovino</Link></li>
    </>
  )
}

export default About