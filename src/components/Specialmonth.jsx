import React, { useState } from 'react';
import './Special.css';

const Specialmonth = () => {
  const [enquire, setEnquire] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:3000/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Enquiry Submitted Successfully!");
        setEnquire(false); 
        e.target.reset();  
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save enquiry.");
    }
  };

  return (
    <div className="main">
      <div 
        onClick={() => setEnquire(false)} 
        className={`model-enquiry ${enquire ? 'modelShow' : ''}`}
      ></div>

      <div className={`model-enquiry-form ${enquire ? 'modelFormShow' : ''}`}>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h3>Get In Touch<span onClick={() => setEnquire(false)} className='cross'>&times;</span></h3>

          <label>Name*<br /><input type="text" name="name" required /></label>
          <label>Contact number*<br /><input type="tel" name="contact" required /></label>
          <label>Email address*<br /><input type="email" name="email" required /></label>
          <label>Enquiry details*<br /><textarea name="details" required></textarea></label>

          <label>
            Found us by<br />
            <select name="foundBy">
              <option value="">Please choose</option>
              <option value="Google">Google</option>
              <option value="Friend">Friend</option>
              <option value="Social Media">Social Media</option>
              <option value="Advertisement">Advertisement</option>
            </select>
          </label>

          <button type="submit">submit your enquiry</button>
        </form>
      </div>

      <div className="sp-heading">
        <h2 className="pop">Most <span className="feature-typewriter"> Featured Program </span> of The Month</h2>
      </div>
      
      <div className='special'>
        <div className="special-content">
          <h1>LEH LADAKH</h1>
          <p>Delhi-Srinagar-Kargil-Lamayuru-Alchi-Leh</p>
          <p>Duration: 09 Days & 08 Nights</p>
          
          <div className="special-info">
            <div className="info-item">
              <span className="info-label">Rating:</span>
              <span className="info-value">★★★★★ (5.0)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Price from:</span>
              <span className="info-value price-highlight">₹ 35,999</span>
            </div>
          </div>
          <button className='contact enq-cnt' onClick={() => setEnquire(!enquire)}>Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Specialmonth;