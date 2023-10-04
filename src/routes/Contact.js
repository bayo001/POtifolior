import React from 'react'

import Navbar from '../component/Navbar'
import Folter from '../component/Folter'
import Heroimage2 from '../component/Heroimage2'
import Form from '../component/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="CONTACT." text="This my contact"/>
      <Form />
      <Folter />
    </div>
  )
}

export default Contact