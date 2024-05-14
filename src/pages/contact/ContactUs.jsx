import React, { useState } from 'react'

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (e) => {
  
    setFormData({
     ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        `https://react-ecommerce-website-6b6bc-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Data set successfully: ', data);

    // Clear form data after successful submission
    setFormData({ name: '', email: '', phone: '' });
    
    } catch (error) {
      console.log('Error sending data: ', error);
    }

  }


  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mt-3 mb-8 text-center">Contact Us</h2>
      <p className="text-center font-serif">
        <i>
          If you have any complain, just reach me out by provide your details,
          our team will reach at you within 24 hours
        </i>
      </p>
      <form
        onSubmit={handleSubmit}
      >
        <div style={{ width: '40%', margin: '2rem auto' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="email"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <button type='submit' className='btn btn-success'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUs