import React from 'react'
import { Link } from 'react-router-dom';
import "./JobLink.css";
function JobLink() {
  return (
    /*JobLink body */
    <section className='Job-link-body'>
    <div className="container3">
    <div className="column-left3">
       <h3>Ready to be part of our team</h3>
       <p>"Join us and help us  make a better world"</p>
       <br/>
       <br/>
       <br/>
    </div>
    <div className="column-right3">
    <Link to="/job">
    <button className="btn3">Job Offer</button>
    </Link>
    </div>

    
</div>
</section>
   
  )
}

export default JobLink;