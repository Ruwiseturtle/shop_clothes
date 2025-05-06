import React from 'react'
import '../Homepage/Hemopage.css';
import Hero from '../../components/Hero/Hero';
import Brends from '../../components/Brends/Brends';

const Homepage = () => {
  return (
    <div className='container-Homepage'>
          <Hero />
          <Brends/>
    </div>
  )
}

export default Homepage
