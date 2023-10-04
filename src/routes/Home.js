import React from 'react'
import Navbar from '../component/Navbar'
import Heroimg from '../component/Heroimg'
import Folter from '../component/Folter'
import Work from '../component/Work'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <Folter />
    </div>
  )
}

export default Home