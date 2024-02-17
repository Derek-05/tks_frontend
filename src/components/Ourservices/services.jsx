import React from 'react'
import "./services.css";
function services() {
  return (
    <body >
    <div className="section">
      <div className="title">
        <h1>Our Services</h1>
        <br/>
        <br/>
      </div>
      <div className="services">
        <div className="New-card">
          <div className="icon">
          <i class='bx bx-plus-medical' ></i>
          </div>
          <h2 className='title-2'>Evaluation and diagnosis</h2>
          <p> Complete medical assessments for children
            , such as congenital malformations, traumatic 
            amputations or neuromuscular diseases.</p>
        </div>
        <div className="New-card">
          <div className="icon">
          <i class='bx bxl-mongodb' ></i>
          </div>
          <h2 className='title-2'>Therapy and rehabilitation</h2>
          <p> Provide physical and occupational therapy to help children adapt and learn how to use 
            their prostheses effectively.</p>
        </div>
        <div className="New-card">
          <div className="icon">
          <i class='bx bx-heart'></i>
          </div>
          <h2 className='title-2'>Long-term monitoring and care</h2>
          <p> Provide continuous follow-up and regular prosthetic settings as the child grows and 
            changes, ensuring they remain adequate.</p>
        </div>
        
      </div>
    </div>
    
    </body>
  )
}

export default services;