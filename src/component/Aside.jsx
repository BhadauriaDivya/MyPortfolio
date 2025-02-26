import React from 'react'
import './Style.css'

import { CiLocationOn, CiMail, CiLinkedin } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import Me from './Images/itme.png'
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <div>
      <aside className="sidebar" data-sidebar>
        <div className='info'>
          <figure className='imgg'>
             <img src={Me} width={150} height={150} alt="That's Me"/>
          </figure>
          <h2>Divyanshi Bhadauria</h2>
          <div className='box'>Front-End Developer</div>
          <div className='box'>UI/UX Developer</div>
            <div className="line"></div>
              <ul className='list'>
                <li className='item'>
                  <div className="icon"><CiMail /></div>
                  <div className="list-data">
                    <p className='list-title'>E-Mail</p>
                    <a className='list-info'>bdivyanshi11.11@gmail.com</a>
                  </div>
                </li>
                <li className='item'>
                  <div className="icon"><IoPhonePortraitOutline/></div>
                  <div className="list-data">
                    <p className='list-title'>Phone</p>
                    <a className='list-info'>+91 6386483824</a>
                  </div>
                </li>
                <li className='item'>
                  <div className="icon"><CiLocationOn/></div>
                  <div className="list-data">
                    <p className='list-title'>Location</p>
                    <a className='list-info'>Delhi, India</a>
                  </div>
                </li>
                <li className='item'>
                  <div className="icon"><CiLinkedin/></div>
                  <div className="list-data">
                    <p className='list-title'>LinkedIn</p>
                    <a href='https://www.linkedin.com/in/divyanshi-bhadauria/' className='list-info'>divyanshi-bhadauria</a>
                  </div>
                </li>
                </ul>
                <div className="img-wrap">
              <Link to='https://www.instagram.com/diivyaa_07/'>
                <FaInstagram/>
                </Link> 
              <Link to='https://www.linkedin.com/in/divyanshi-bhadauria/'>
                <CiLinkedin/>
                </Link> 
              <Link to='https://github.com/BhadauriaDivya'>
                <FiGithub/>
                </Link> 
              </div>
          </div>
      </aside>
    </div>
  )
}

export default Aside