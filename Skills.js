import React from 'react';
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./Skills.css";
import { Link } from 'react-router-dom';
import handle from "./Images/javascript-39395.png"
import change from "./Images/html5-logo-31813.png"
import clear from "./Images/pngwing.com.png"
import link from "./Images/bootstrap-logo.png"
import react from "./Images/react-logo-vector-1.svg"
import github from "./Images/5847f98fcef1014c0b5e48c0.png"

function Skills() {
  return (
    <div>
      <img src={event} className='background-img' alt="Background"></img>
      <div className='king'>
        <Link to="/" className='cod'>HOME</Link><br></br> <br></br>
        <Link to="/skills" className='ing'>SKILLS</Link><br></br> <br></br>
        <Link to="/about" className='le'>ABOUT</Link><br></br> <br></br>
        <Link to="/contact" className='arn'>CONTACT</Link><br></br> <br></br>
      </div>
      <div>
        <h3 className='h3'>Programming Languages</h3>
        </div>
      
        <div>
        <h3 className='click'>Scripting Languages</h3>
        </div>
        <div >
        <img src={handle} alt='Background'className='js' ></img>
        </div>
        <div className='kj' >
          <img src={change} alt='Background'className='html' ></img>
        </div>
        <div className='csss'> 
          <img src={clear} alt='Background' className='css'></img>
        </div>
        <div className='boot'>
          <img src={link} alt='Background' className='bootstrap'></img>
        </div>
        <div className='rea'>
          <img src={react} alt='Background' className='react'></img>
        </div>
        <div className='git'>
        <img src={github} alt='Background'className='github'></img>
        </div>
        <div className='bar'>
        <h3 className='name'>Library</h3>
        </div>
         <div className='clicks'>
          <h3 className='hub'>
            Tools
          </h3>
         </div>

      </div>
      
      
      
    
  );
}

export default Skills;
