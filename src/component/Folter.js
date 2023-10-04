import "./folterStyle.css"


import React from 'react'

import { FaHome,
     FaPhone,
     FaMailBulk, 
     FaFacebook, 
     FaTwitter, FaLinkedin 
    } from "react-icons/fa"

const Folter = () => {
  return (
    <div className="folter">
        <div className="folter-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"  }} />
                    <div>
                        <p>453 Housing Estate</p>
                        <p>Lagos Nigeria</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"  }} />
                 +234703764667
                 </h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"  }} />
                 abdulwahababdullahi@gmail.com
                 </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company </h4>
                <p>This abdulwahab abdullahi. i enjoy discuss new project 
                     and design design</p>
                <div className="Social">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"  }} />
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"  }} />
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"  }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Folter