import React from 'react'
import { Link } from 'react-router-dom'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa' // Assuming these are imported
import './Form.css'

const Form = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        
        <div className="footer-left">
          <div className="foot-img">
            <img src="src\assets\tripzyLogo.png" alt="Tripzy Logo" /> 
          </div>
          <p className='company-desc'>IndiaTravel is a gateway of information and services for travelers who want to get to know India a little bit better.</p>
          
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="footer-middle">
          <h3>Useful Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="">Tour Package</Link>
          <Link to="">Destination</Link>
          <Link to="">Blogs</Link>
          <Link to="">Destination Wedding</Link>

          <button className='query-btn'>Send Query</button>
        </div>
        
        <div className="footer-right">
          <h3>Contact</h3>
          <div className="foot-cont-detail">
            <p>New Delhi, India</p>
            <p className='foot-add'>info@tripzy.com</p>
          </div>
          <h3 className='whatsapp'>Whatsapp</h3>
          <div className="whatsapp-info">
            <FaWhatsapp className='whatsapp-icon' />
            <p className='foot-num'>+91 9865247892</p>
          </div>
        </div>
        
      </div>
      <p className='copyright'>Copyright © 2025 Tripzy. All Rights Reserved.</p>
    </div>
  )
}

export default Form