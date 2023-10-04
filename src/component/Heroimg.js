import "./HeroimageStyle.css"

import React from 'react'

import { Link } from "react-router-dom"

import Introimg from "../assets/intro-pg.jpg"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="elon">
            <img className="into-img" src={Introimg} alt="Intro"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project"
                 className="btn">PROJECT
                </Link>
                <Link to="/contact"
                 className="btn btn-light">CONTACT
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg