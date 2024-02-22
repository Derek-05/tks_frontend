import React from 'react'

import './jobs.css';


const Jobs = ({imgUrl, title}) => {
  return (
     /* Job container body */
    <div className='tks__team-container_job'>
        <div className='tks__team-container_job_img'>
          
        </div>
    <div className='tks__team-container_job-content'>
        <div>
            <h3>{title}</h3>
        </div>
    </div>
    </div>
  )
}

export default Jobs