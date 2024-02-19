import React from 'react'
import {About_Us, Footer, Header, Prosthetics, Team, Jobs ,Ourservices} from '../components';

const HomePage = () => {
  return (
    <div className='Home-Page'>
        <div className='bg-transparent home-bg'>
            
            
            <Header />
            <About_Us />
            <Ourservices/>
            
           
            <Jobs />
            <Prosthetics />
            <Team />
            <Footer />
        </div>
    </div>
  )
}

export default HomePage