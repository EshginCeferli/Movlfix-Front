import React from 'react' 
import Banner from '../../components/Banner'
import Live from '../../components/Live'
import Rated from '../../components/Rated'
import Service from '../../components/Service'
import Trial from '../../components/Trial'
import Upcoming from '../../components/Upcoming'


function Home() {
  return (
    <div>     
       
        <Banner/>
        <Upcoming/>
        <Service/>
        <Rated/>
        <Live/>
        <Trial/>        
  
    </div>
  )
}
export default Home