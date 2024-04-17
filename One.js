import React from 'react';
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./Home.css";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";  
import { IoMdMail } from "react-icons/io";

function Home() {
  return (
    <div className='one'>
      <img src={event} className='background-img' alt="Background"></img>

      <h1 className='three'>Hello!</h1>
      <h1 className='four'>I am Vishal</h1>
      <p className='five'>I'm a Creative Designer and I make things work. Turning your dreams into reality.</p>
     
        <div className='class'>
      <FaLinkedin  /> 
        <FaXTwitter />
        <FaGithub  />
        <FaFacebook />
        <IoMdMail />
        </div>
        <div className='two'>
     <Link to="/" className='six'>HOME</Link><br></br>  <br></br> 
     <Link to="/skills" className='seven'>SKILLS</Link><br></br> <br></br>
     <Link to="/about" className='eight'>ABOUT</Link><br></br> <br></br>
     <Link to="/contact" className='nine'>CONTACT</Link><br></br> <br></br>
      </div>
      
  
      
    </div>
  );
     
}

export default Home;











import React from 'react'
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./Contact.css"
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


function Contact() {



  return (
    <div>
        <div>
    <img src={event}  className='er' alt="Background" />  
    <div>
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
        <IoIosMail /> 
               </a>
      </div>

    <div className='ig'>
        <Link to="/" className='cod'>HOME</Link><br></br> <br></br>
        <Link to="/skills" className='ing'>SKILLS</Link><br></br> <br></br>
        <Link to="/about" className='le'>ABOUT</Link><br></br> <br></br>
        <Link to="/contact" className='arn'>CONTACT</Link><br></br> <br></br>
      
     </div>
     <div className='iuo'>
      <IoIosMail className='iu'/>
      
      </div>
      <div className='phone'>
      <FaPhoneAlt />
      </div>
      
    </div>
     <div className='pi'>
      <h2 >PHONE:9384607733</h2>
      <h2>MAIL: vishalprakash9372@gmail.com</h2>
      </div>
    </div>

  )
}

export default Contact