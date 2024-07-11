import React from 'react'
import Navbar from '../../Component/navbar/Navbar'
import FindcarDropDown from '../../Component/dropDownCars/FindcarDropDown'
const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <FindcarDropDown/>
    </div>  
  )
}

export default Homepage