
import React from 'react'
import './Train.css'

const Trains = () => {
    return (
        <div className='train'>
            <div className="train-container">
                <div className="train-heading">
                    <h2 className="train-head">Experience <span className="train-typewriter"> Luxury Trains </span> In India</h2>
                </div>
                <div className="train-img-grid">
                    
                    <div className='train-card image1'>
                        <div className="train-info">
                            <h1>Maharajas' Express</h1>
                            <p>Delhi - Agra - Jaipur - Mumbai</p>
                        </div>
                    </div>
                    
                    <div className='train-card image2'>
                        <div className="train-info">
                            <h1>Deccan Odyssey</h1>
                            <p>Mumbai - Goa - Hyderabad - Delhi</p>
                        </div>
                    </div>
                    
                    <div className='train-card image3'>
                        <div className="train-info">
                            <h1>Golden Chariot</h1>
                            <p>Karnataka - Goa - Kerala</p>
                        </div>
                    </div>
                    
                    <div className='train-card image4'>
                        <div className="train-info">
                            <h1>Palace on Wheels</h1>
                            <p>Delhi - Rajasthan - Agra</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Trains