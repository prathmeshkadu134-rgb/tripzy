import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      number: num,
      email: email,
      message: message
    };

    // Post data to JSON server
    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((resp) => {
      if (resp.ok) {
        alert(`Thank you, ${name}! Your message has been received.`);
        // Clear form
        setName('');
        setNum('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Something went wrong.');
    });
  };

  return (
    <div>
      <div className="contact-form-wrapper">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Your Number"
            minLength={5}
            maxLength={10}
            value={num}
            onChange={(e) => setNum(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          ></textarea>

          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
