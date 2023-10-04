import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import Pro1 from "../assets/pro1.jpg"
import Pro3 from "../assets/pro3.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I</h1>
        <p>i'm a react frontend developer. I created responsive secure website for my client </p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-cointainer">
                <div className="image-stace top">
                  <img src={Pro1} alt="yes" className="img" />
                </div>
                <div className="image-stace bottom">
                  <img src={Pro3} alt="yes" className="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent