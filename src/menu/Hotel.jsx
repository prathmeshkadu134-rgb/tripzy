import React, { useState } from "react";
import "./Hotel.css";
import Form from "../components/Form";

const Hotel = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const bookingData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert("Booking request sent successfully!");
        setIsBookingOpen(false); 
        e.target.reset(); 
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="hotel">
        <div className="main-hotel">
          <h2 className="pop">
            <span className="hotel-typewriter"> Luxury & Unique </span> Hotels
          </h2>
        </div>
        <div className="hotel-middle">
          <div className="hotel-content">
            <h2>Luxury & Heritage Hotels in India</h2>
            <p className="hotel-tagline">-Where Comfort Meets Culture</p>
            <p className="hotel-head1">
              Step into a world where timeless heritage blends seamlessly with modern indulgence...
            </p>
            <button className="hotel-btn" onClick={() => setIsBookingOpen(true)}>
              Book Now
            </button>
          </div>

          <div className="hotel-img1">
            <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Hotel" style={{ borderRadius: "20px" }} />
          </div>
          <div className="hotel-img2">
            <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Resort" style={{ borderRadius: "20px" }} />
          </div>
        </div>
      </div>

      {isBookingOpen && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <button className="close-btn" onClick={() => setIsBookingOpen(false)}>&times;</button>
            <h2 className="form-title">Reservation Inquiry</h2>
            
            <form className="booking-fields" onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              
              <div className="form-row">
                <div style={{flex:1}}>
                  <label style={{fontSize: '12px'}}>Check-in</label>
                  <input type="date" name="checkIn" required />
                </div>
                <div style={{flex:1}}>
                  <label style={{fontSize: '12px'}}>Check-out</label>
                  <input type="date" name="checkOut" required />
                </div>
              </div>

              <select name="roomType" required>
                <option value="">Select Room Type</option>
                <option value="luxury">Luxury Suite</option>
                <option value="heritage">Heritage Room</option>
                <option value="wellness">Wellness Resort</option>
              </select>

              <button onClick={()=>handleSubmit} type="submit" className="submit-booking">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      )}

      <Form />
    </div>
  );
};

export default Hotel;