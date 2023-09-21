import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="contact-details">
          <div className="contact">
            <h2 className='contact-heading'>CONTACT INFO</h2>
            <div className="contact-info">
              <i class="fa-solid fa-location-dot"></i><span className='address'>Address: </span><span className='add-info'>2nd Floor, Bholababu Complex,<br/>Near Teen Lalten Chowk, Bettiah, Bihar (INDIA)</span><br />

              <div className="contact-space">
                <i class="fa-solid fa-envelope"></i><span className='address'>Email Us </span><span span className='add-info'>: post@mycleartax.in</span><br />
              </div>

              <div className="contact-space">
                <i class="fa-solid fa-phone"></i><span className='address'> Call Us </span><span className='add-info'>: (+91)-9430036171</span>
              </div>
            </div>
          </div>

          <div className="contact-links">
            <h2 className='contact-heading'>RELATED LINKS </h2>
            <a href='/'>E-way Bill Portal</a>
            <a href='/'>Bihar Commercialtax Department</a>
            <a href='/'>GST Common Portal</a>
            <a href='/'>Income Tax E-Filling Portal</a>
            <a href='/'>Track PAN Status</a>
            <a href='/'>Tally Solutions</a>
            <a href='/'>Refund Status</a>
          </div>

          <div className="contact-links">
            <h2 className='contact-heading'>SOCIAL LINKS</h2>
            <a href='/'>Twitter</a>
            <a href='/'>Facebook</a>
            <a href='/'>Google+</a>
            <a href='/'>Instagram</a>
          </div>

          <div className="contact-news">
            <h2 className='contact-heading'>NEWSLETTER</h2>
            <h6 className='newsletter'>For Latest news & information subscribe our Newsletter</h6>
            <div className="subscribe">
              <input type="search" placeholder='Enter Your Email Adress' />
              <button className='btn'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
