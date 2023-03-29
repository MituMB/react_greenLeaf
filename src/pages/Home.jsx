import React from 'react'
import { About,Banner,Features,Header,Navbar,Review,Services,Works,Team,Blogs,Footer} from '../components'
import Brands from '../components/Brands'


const Home = () => {
  return (
    <div>

        <Banner />
        <Features />
        <Services />
        <About />
        <Works />
        <Review />
        <Team />
      <Blogs />
        <Brands /> 

    </div>
  )
}

export default Home