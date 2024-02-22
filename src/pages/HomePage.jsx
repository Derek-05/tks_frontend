import React from 'react'
import {About_Us, Footer, Header, Prosthetics, Team, Jobs ,Ourservices, JobLink} from '../components';

const HomePage = () => {
  return (
      /* Home Page */
    <div className='Home-Page'>
        <div className='bg-transparent home-bg'>
            
            
            <Header />
            <About_Us />
            <Ourservices/>
            <Jobs />
            <Prosthetics />
            <Team />
             <JobLink/>
            <Footer />
        </div>
    </div>
  )
}

export default HomePage