import React from 'react';
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./Home.css";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithubSquare, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import profile from "./Images/profilepic.jpeg"

function Home() {
  return (
    <div className='one'>
      <img src={event} className='background-img' alt="Background" />
      
      <h1 className='three'>Hello!</h1>
      <h1 className='four'>I am Vishal</h1>
      <p className='fivee'>I'm a Creative Designer and I make things work. Turning your dreams into reality.</p>
     
      <div className='class'>
        <a href='https://www.linkedin.com/' className='link1'>
          <FaLinkedin />
        </a>
        <a href='https://twitter.com/' className='link2'>
          <FaTwitter />
        </a>
        <a href='https://github.com/' className='link3'>
          <FaGithubSquare />
        </a>
        <a href='https://www.facebook.com/' className='link4'>
          <FaFacebook />
        </a>
        <a href='mailto:example@example.com' className='link5'>
          <IoMdMail />
        </a>
      </div>

      <div className='two'>
        <Link to="/" className='six'>HOME</Link><br /><br />
        <Link to="/skills" className='seven'>SKILLS</Link><br /><br />
        <Link to="/about" className='eight'>ABOUT</Link><br /><br />
        <Link to="/contact" className='nine'>CONTACT</Link><br /><br />
      </div>
      <div className='back'>
        <img src={profile} className='profile' alt='Background'></img>
      </div>
    </div>
  );
}

export default Home;
