
import React from 'react'
import './Destination.css'

const Destination = () => {
    return (
        <div className='destination'>
            <div className="des-container">
                <div className="des-heading">
                    <h2 className='dest-head'>Recommended <span className='destination-typewriter'>Destinations</span> of The Month</h2>
                </div>
                
                <div className="des-img-grid">
                    
                    <div className="des-card darjeeling">
                        <div className="des-info">
                            <h1>Darjeeling</h1>
                            <h3>Theme: Himalayan Tea Trails</h3>
                            <p className="price-tag">Packages from ₹ 19,999</p>
                        </div>
                    </div>
                    
                    <div className="des-card udaipur">
                        <div className="des-info">
                            <h1>Udaipur</h1>
                            <h3>Theme: Royal Lakes & Palaces</h3>
                            <p className="price-tag">Packages from ₹ 24,500</p>
                        </div>
                    </div>
                    
                    <div className="des-card rishikesh">
                        <div className="des-info">
                            <h1>Rishikesh</h1>
                            <h3>Theme: Adventure & Yoga Retreat</h3>
                            <p className="price-tag">Packages from ₹ 14,999</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destination