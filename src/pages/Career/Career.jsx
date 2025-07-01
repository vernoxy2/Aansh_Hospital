import React from 'react'
import career from "../../assets/career/careerbg.png"
import WhyWork from '../../components/Career/WhyWork'

const Career = () => {
  return (
    <div>
      <div>
        <img src={career} alt="" className='w-full'/>
      </div>
      <div className='py-10'>
        <WhyWork />
      </div>
    </div>
  )
}

export default Career
