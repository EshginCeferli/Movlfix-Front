import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PricingBanner from '../../components/PricingBanner'
import PricingComp from '../../components/PricingComp'
import Trial from '../../components/Trial'

function Pricing() {
  return (
    <div>
      <Navbar/>
        <PricingBanner/>
        <PricingComp/>        
        <Trial/>
        <Footer/>
    </div>
  )
}

export default Pricing