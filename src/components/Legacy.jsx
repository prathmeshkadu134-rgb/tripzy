
import React from 'react'
import './Legacy.css'
const Legacy = () => {
  return (
    <div className='legacy'>
      <div className="legacy-container">
        <div className="le-content">
            <p className='le-normal'>A Legacy of <span className='cust'>Happy Customers</span></p>
            <h5>Creating unforgettable journeys that turn travelers into lifelong storytellers</h5>
        </div>
        <div className="cards">
            <div className="testimonial-card card1">
                <div className="card-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
                <p className='review-text'>India Travel smoothly arranged a lovely 10 day trip for my husband and me to the 25th annual Hornbill Festival in Nagaland, India.</p>
                <p className='card-names'>Mohan Sharma</p>
            </div>
            
            <div className="testimonial-card card2">
                 <div className="card-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
                <p className='review-text'>It was our first visit in India. Shikhar travels organized our trip “golden triangle” perfectly. It was a good choice of places and hotels.</p>
                <p className='card-names'>Rohan Patil</p>
            </div>
            
            <div className="testimonial-card card3">
                 <div className="card-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">⯨</span>
                </div>
                <p className='review-text'>We took a tour of Northern India through India Travels in 2023. It was memorable. India travel team of Meenakshi, Vikas and Devesh.</p>
                <p className='card-names'>Vinay Jain</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Legacy