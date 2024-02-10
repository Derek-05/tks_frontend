import React from 'react'
import {About_Us, Footer, Header, Prosthetics, Team, Jobs ,Ourservices} from '../components';

const HomePage = () => {
  return (
    <div className='Home-Page'>
        <div className='bg-transparent home-bg'>
            
            
            <Header />
            <About_Us />
            <Team />
            <Ourservices/>
            <Jobs />
            <Prosthetics />
            <Footer />
        </div>
    </div>
  )
}

export default HomePage