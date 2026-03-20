// import React, { useState } from "react";
// import { Link } from "react-router-dom"; 
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="src\assets\tripzyLogo.png" alt="logo" />
//         <h2>Tripzy</h2>
//       </div>

//       <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "✖" : "☰"}
//       </div>

//       <ul className={isOpen ? "nav-links open" : "nav-links"}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/package">Package</Link></li> 
//         <li><Link to="/hotel">Hotels</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
        
//         <li className="nav-contact-btn"><a href="#">Book Now</a></li> 
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    adults: 1,
    travelClass: "Economy",
    accommodation: "5 Star Hotel"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setIsFormOpen(false);

      setFormData({
        from: "",
        to: "",
        departure: "",
        returnDate: "",
        adults: 1,
        travelClass: "Economy",
        accommodation: "5 Star Hotel"
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    }
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Server not running! Make sure to start json-server on port 5000.");
  }
};

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src\assets\tripzyLogo.png" alt="logo" />
        <h2>Tripzy</h2>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/package">Package</Link></li> 
        <li><Link to="/hotel">Hotels</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        <li className="nav-contact-btn">
          <a href="#" onClick={(e) => { e.preventDefault(); setIsFormOpen(true); }}>Book Now</a>
        </li> 
      </ul>

      {/* SUCCESS POPUP */}
      {isSubmitted && (
        <div className="success-toast">
          ✅ Form Submitted Successfully!
        </div>
      )}

      {/* BOOKING FORM MODAL */}
      {isFormOpen && (
        <div className="journey-overlay">
          <div className="journey-modal">
            <button className="close-form-btn" onClick={() => setIsFormOpen(false)}>&times;</button>
            
            <div className="journey-header">
              <h2>Plan Your Full Journey</h2>
              <p>Details will be saved for your trip.</p>
            </div>

            <form className="journey-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>From</label>
                  <input type="text" name="from" onChange={handleChange} placeholder="Origin City" required />
                </div>
                <div className="form-group">
                  <label>To</label>
                  <input type="text" name="to" onChange={handleChange} placeholder="Destination" required />
                </div>
                <div className="form-group">
                  <label>Departure</label>
                  <input type="date" name="departure" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Return</label>
                  <input type="date" name="returnDate" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Adults</label>
                  <input type="number" name="adults" min="1" onChange={handleChange} defaultValue="1" required />
                </div>
                <div className="form-group">
                  <label>Travel Class</label>
                  <select name="travelClass" onChange={handleChange}>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Accommodation</label>
                <select name="accommodation" onChange={handleChange}>
                  <option>5 Star Hotel</option>
                  <option>Heritage Palace</option>
                  <option>Boutique Resort</option>
                </select>
              </div>

              <button type="submit" className="book-journey-submit">Confirm All Bookings</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;