import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div>
        <img src={event} alt='Background' className='er'></img>
      <div>
        <div className='ig'>
          <Link to="/" className='cod'>HOME</Link><br /><br />
          <Link to="/skills" className='ing'>SKILLS</Link><br /><br />
          <Link to="/about" className='le'>ABOUT</Link><br /><br />
          <Link to="/contact" className='arn'>CONTACT</Link><br /><br />
        </div>
        <div className='iuo'>
          <IoIosMail className='iu'/>
        </div>
        <div className='phone'>
          <FaPhoneAlt />
        </div>
      </div>
      <div className='pi'>
        <h2>PHONE: 9384607733</h2>
        <h2>MAIL: vishalprakash9372@gmail.com</h2>
      </div>
    </div>
  );
}

export default Contact;
