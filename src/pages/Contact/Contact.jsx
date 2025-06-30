import React from 'react'
import bg from "../../assets/contact/contactbg.png";
import ContactUs from '../../components/Contact/ContactUs';

const Contact = () => {
  return (
    <div>
      <div>
        <img src={bg} alt="" className='w-full'/>
      </div>
      <div className='py-8'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact
