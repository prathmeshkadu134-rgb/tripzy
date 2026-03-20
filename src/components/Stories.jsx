

import React from 'react'
import { FaComments,FaRegCalendarAlt } from 'react-icons/fa'
import './Stories.css'

const Stories = () => {
  return (
    <div className='story'>
      <div className="story-container">
        <div className="story-heading">
            <p className="head-text">Our Latest Travel Stories</p>
        </div>
        <div className="story-image-grid">
           
           <div className="story-card main-story">
             <div className="story-img-wrapper story-img1">
                <p className='main-heading'>DURGA PUJA IN KOLKATA </p>
            </div>
            <div className="story-img-content">
                <p className='dates'><FaRegCalendarAlt/> October 15, 2024 <FaComments/> 0</p>
                <h2>Cultural Guide: What to Expect <br/>when visiting Durga Puja ...</h2>
            </div>
            {/* Removed the hr for cleaner separation, using margin instead */}
           </div>
           
           <div className="story-card main-story">
             <div className="story-img-wrapper story-img2">
                <p className='main-heading'>GANESH UTSAV IN MUMBAI </p>
            </div>
            <div className="story-img-content">
                <p className='dates'><FaRegCalendarAlt/> October 15, 2024 <FaComments/> 0</p>
                <h2>Cultural Guide: What to Expect <br/>when visiting Ganesh Utsav ...</h2>
            </div>
           </div>
           
           <div className="story-card main-story">
             <div className="story-img-wrapper story-img3">
                <p className='main-heading'>PUSHKAR CAMEL FAIR IN RAJASTHAN </p>
            </div>
            <div className="story-img-content">
                <p className='dates'><FaRegCalendarAlt/> October 15, 2024 <FaComments/> 0</p>
                <h2>Festival Guide: Experiencing <br/>the Pushkar Camel Fair ...</h2>
            </div>
           </div>
           
        </div>
      </div>
    </div>
  )
}

export default Stories