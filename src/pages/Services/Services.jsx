import React from 'react'
import hero from "../../assets/services/hero.png"
import Child from '../../components/Services/Child'
import OurService from '../../components/Home/OurService'

const Services = () => {
  return (
    <div className=''>
      <div>
        <img src={hero} alt="" className='w-full'/>
      </div>
      <div className='py-5'>
        <Child />
      
        <OurService />
      </div>
    </div>
  )
}

export default Services
