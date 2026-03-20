import React from 'react'
import './About.css'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/contact');

  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <p className="hero-text">Experience India Like Never Before</p>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="about-intro">
        <div className="container">
          <h1 className='brand-title'>TRIPZY</h1>
          <p className='brand-subtitle'>YOUR VIRTUAL PASSAGE TO INDIA</p>
          <div className="description-text">
            <p>IndiaTravel.com is a gateway of information and services for travelers who want to get to know India a little bit better. Reading is insufficient to convert a sceptic; you must go on a trip to understand what it’s truly like.</p>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Our Core Values */}
      <section className="values-section">
        <div className="value-card">
          <div className="icon">📍</div>
          <h3>Local Expertise</h3>
          <p>Hand-picked destinations vetted by locals who know the hidden gems of India.</p>
        </div>
        <div className="value-card">
          <div className="icon">🛡️</div>
          <h3>Safe Travels</h3>
          <p>Your safety is our priority. We provide 24/7 support throughout your journey.</p>
        </div>
        <div className="value-card">
          <div className="icon">💎</div>
          <h3>Value Services</h3>
          <p>Premium experiences at competitive prices, ensuring luxury is accessible.</p>
        </div>
      </section>

      {/* 4. NEW SECTION: Achievement Stats */}
      <section className="stats-bar">
        <div className="stat-item">
          <h2>10k+</h2>
          <p>Happy Travelers</p>
        </div>
        <div className="stat-item">
          <h2>150+</h2>
          <p>Tour Packages</p>
        </div>
        <div className="stat-item">
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>Customer Care</p>
        </div>
      </section>

      {/* 5. Call to Action (CTA) */}
      <section className="about-cta">
        <div className="cta-content">
          <h1>READY TO PLAN YOUR TRIP?</h1>
          <p>From the snowy peaks of Leh to the backwaters of Kerala, let's craft your perfect itinerary.</p>
          <button className='cta-btn' onClick={handleClick}>Let's Talk Now</button>
        </div>
      </section>

      <Form/>
    </div>
  )
}

export default About