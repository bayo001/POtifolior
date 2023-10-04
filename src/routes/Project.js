import React from 'react'
import Navbar from '../component/Navbar'
import Folter from '../component/Folter'
import Heroimage2 from '../component/Heroimage2'
// import Workcard from '../component/Workcard'
import Work from '../component/Work'

const Project = () => {
  return (
    <div>
        <Navbar />
        <Heroimage2 heading="PROJECT" text="Some of my recent work"/>
        <Work />
        <Folter />
    </div>
  )
}

export default Project