import React from 'react'
import '../Style/Choose.css'

const Choose = () => {
  return (
    <div className="container5">
      <div className="choose-circle1">
        <div className="c-img">
          <img src="./images/businessman.png " alt="" className='choose-img' />
        </div>
        <div className="c-content">
          <h3>2500+</h3>
          <h4>SATISFIED CLIENTS</h4>
        </div>
      </div>

      <div className="choose-circle1">
        <div className="c-img">
          <img src="./images/tax.png " alt="" className='choose-img2' />
        </div>
        <div className="c-content">
          <h3>3000+</h3>
          <h4>INCOME TAX RETURN</h4>
        </div>
      </div>

      <div className="choose-circle1">
        <div className="c-img">
          <img src="./images/suitcase.png " alt="" className='choose-img3' />
        </div>
        <div className="c-content">
          <h3>15 YEARS+</h3>
          <h4>EXPERIENCE</h4>
        </div>

      </div>

      <div className="choose-circle1">
        <div className="c-img">
          <img src="./images/trophy.png " alt="" className='choose-img4' />
        </div>

        <div className="c-content">
          <h3>1500+</h3>
          <h4>GST RETURN</h4>
        </div>

      </div>
    </div>
  )
}

export default Choose