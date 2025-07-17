import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import MyResume from './Files/Divyanshi_Bhadauria_Resume.pdf'

const Resume = ( ) => {
  return (
    <div className="resume">
    <h1>Resume</h1>
    <div className="yellowline"/>
    <div className="edu">
    <div className="title-wrap">
        <div className="icon-book">
          <IoBookOutline/>
        </div>
        <h2>Education</h2>
    </div>
    <ol className='edulist'>
        <li className='eduitem'>
            <div className="eduline"/>
            <div className="edu-circle"/>
            <div className="content">
              
            <h3>KIET Group Of Institute</h3>
            <span>2023- Expected graduation 2025</span>
            <p>
                Master of Computer Application<br/> (MCA)
              </p>
            </div>
        </li>
        <li>
        <div className="edu-circle1"/>
        <div className="content">
          <br/>
            <h3>Swami Sukhdevanand College</h3>
            <span>2020-2023</span>
            <p>
              Bachelor of Science, Mathematics <br/>(BSc Mathematics)<br/>
              </p>
              </div>
        </li>
        <li>
        <div className="edu-circle2"/>
        <div className="content">
          <br/>
            <h3>Ryan International School</h3>
            <span>2019-2020</span>
            <p>
                High School<br/>
              </p>
              </div>
        </li>
    </ol>

    <br /><br /><br />
    <div className='cent'>
      <button><Link to={MyResume} target="_blank" download>My Resume</Link></button>
    </div>
    </div>
    </div>
  )
}

export default Resume
