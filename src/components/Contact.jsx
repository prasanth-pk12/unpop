import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_number: '',
    location: '',
    business: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("dM2ZB8P9LvoXAkJyq")
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await emailjs.send(
        'service_xq4rgnn',
        'template_ci2b7bd',
        {
          business: formData.business,
          name: formData.from_name,
          number: formData.from_number,
          location: formData.location,
          message: formData.message
        }
      )
      
      console.log('Success:', response)
      alert('Message sent successfully!')
      
      // Reset form
      setFormData({
        from_name: '',
        from_number: '',
        location: '',
        business: '',
        message: ''
      })
    } catch (error) {
      console.log('Failed:', error)
      alert('Message failed to send. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contactForm" className="contact" aria-labelledby="contact-heading">
      <div id="contact"></div> {/* Additional anchor for contact navigation */}
        <h2 id="contact-heading">Register Your Product</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="number">
              Phone Number <span aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="number"
              name="from_number"
              value={formData.from_number}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">
              Location <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="business">
              Business <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">
              Business Description <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-submit">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact