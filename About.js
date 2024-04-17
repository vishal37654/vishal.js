import React from 'react';
import { Link } from 'react-router-dom'; 
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./About.css";

function About() {
  return (
    <div className='po'>
        <div>
      <img src={event}  className='io' alt="Background" />
      </div>
      <div className='header'>
        <Link to="/" className='co'>HOME</Link><br /><br />
        <Link to="/skills" className='in'>SKILLS</Link><br /><br />
        <Link to="/about" className='lear'>ABOUT</Link><br /><br />
        <Link to="/contact" className='ning'>CONTACT</Link><br /><br />
      </div>
      <div className='bv'>
      <h1 className='h1'>About Me</h1>
      <h3 className='ghi'>Hi there! I'm VISHAL, and I'm really excited about WebDevelopment.<br></br>
Even though I'm new to the game, I'm eager to learn and grow.</h3>
      <h3 className='jkl'>
           What I'm Good At:
      </h3>
      <h4 className='lkj'>I've been working on WebDevelopment and I'm pretty good at Coding. I love working in Peaceful Environment.</h4>  
      <h3 className='my'>My Education:</h3>
      <h4 className='fg'>I studied Mechanical Engineering at Srm College. I did some cool stuff during my studies like Poster Precentation,Hackathon,etc.</h4>
     <h3 className='nm'>What I Love:</h3>
     <h4 className='fd'>I'm really passionate about The Thrill Of Creation. My dream is to became a Passionate Developer.</h4>
    <h3 className='yu'>Why Me</h3>
    <h4 className='rt'>Picking me means choosing someone who's excited to jump in and get things done. I'm ready to Turning your dreams into reality.</h4>
     <h3 className='ed'>Let's Chat:</h3> 
      </div>
      </div>
);
}

export default About;
