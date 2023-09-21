import React from 'react'
import '../Style/About.css'

const About = () => {
  return (
    <>
      <div className="contanier">
        <div className="about-left">
          <h1 className='heading'>Welcome To Pushkar & Associates</h1>
          <p className='about-text'>We Pushkar & Associates are a Tax-Consultant with a sole purpose of providing excellent advice related to Income Tax, GST, Professional Tax, Service Tax & Value Added Tax (VAT). <br/><br/> 

            We established our Firm in the year 2001 as a sole Proprietorship. Mr. Pushkar Kumar has sound knowledge and years of experience in this field. Many tax consultants offers tax and financial advice, choose the right consultant for their needs; all this may seem a daunting task. Finding the right consultant will not only reduce your tax liability but also it will save you a great deal of stress and frustration. <br/><br/>

            We are a young and dynamic Law Consultant with firm and diverse expertise. We have an enviable reputation for providing a fast, efficient service in a friendly and professional manner. Prior knowledge of various businesses puts us in good stead to offer you the best tax and financial advice. At Pushkar & Associates, we will help you with all legal assistance to solve your legal complications.<br/><br/>

            We provide basically four aspects of tax and financial advice i.e. Income Tax, Goods & Services Tax (GST), Professional Tax, Value Added Tax (VAT)</p>
        </div>
        <div className="about-right">
          <img src="./images/about1.png" alt="" className='aboutimg' />
        </div>
      </div>
    </>
  )
}

export default About
