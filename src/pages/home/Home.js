import React, {useState} from 'react' 
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Live from '../../components/Live'
import Navbar from '../../components/Navbar'
import Rated from '../../components/Rated'
import Service from '../../components/Service'
import Trial from '../../components/Trial'
import Upcoming from '../../components/Upcoming'


function Home() {
  
  return (
    <div>   
        <Navbar/>    
        <Banner/>       
        <Upcoming/>
        <Service/>
        <Rated/>
        <Live/>
        <Trial/>        
        <Footer/>
    </div>
  )
}
export default Home