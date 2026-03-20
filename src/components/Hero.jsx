import React, { useState } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const destinations = [
    'Jaipur, Rajasthan',
    'Goa Beaches',
    'Kerala Backwaters',
    'Varanasi Ghats',
    'Leh-Ladakh Trek',
    'Mumbai City',
  ];

  const suggestions = destinations.filter(dest =>
    dest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();
  function handleClick() {
    navigate('/contact');
  }
  const pkg = useNavigate();
  function packageClick() {
    pkg('/package');
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className='Hero'>
      <div className="overlay"></div>
      <div className="hero-container">
        <span>Explore India with our package</span>
        <h1>Explore India,<br />Festivals & Culture</h1>
        <div className="btn">
          <button className='contact' onClick={handleClick} >Contact Us</button>
          <button className='package' onClick={packageClick}>Packages</button>
        </div>

        <div className="search-input-group">
          <input
            type="text"
            placeholder="Where do you want to travel today?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
          />
          {showSuggestions && searchTerm && suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;