import React from 'react'
import hero from "../../assets/facilities/background.png"
import OurHospital from '../../components/Facilities/OurHospital'

const Facilities = () => {
  return (
    <div>
      <div>
        <img src={hero} alt="" className='w-full'/>
      </div>
      <div className='py-5'>
        <OurHospital/>
      </div>
    </div>
  )
}

export default Facilities
