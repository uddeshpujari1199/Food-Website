import React from 'react'
import Navbar from '../component/Navbar'
import './Contact.css'
import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
        <Navbar/>
       <div className='main-constct'>
        <div className='right-side'>
            <h1>GET IN TOUCH WITH US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
            <div className='right-lower'>
            <div><FaHome /></div>   
                <div>
                <h4>Our Location</h4>
                <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                </div>
            </div>
            <div className='right-lower'>
            <div><MdContactPhone /></div>
                <div>
                <h4>Phone Number</h4>
                <p>(+62)81 414 257 9980</p>
                </div>
            </div>
            <div className='right-lower'>
             <div><MdEmail /></div>
                <div>
                <h4>Email Address</h4>
                <p>info@yourdomain.com</p>
                </div>
            </div>
        </div>
        <div className='left-Side'>
            <div className='form'>
                <input type='text' placeholder='Enter Your Name'></input>
                <input type='text' placeholder='Enter Your Email'></input>
                <input type='text' placeholder='Enter Your Number'></input>
                <input type='text' id='message'placeholder='Enter Your Message'></input>
                <button>Submit</button>
            </div>
        </div>
       </div>
       
    </div>
  )
}

export default Contact