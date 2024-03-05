import React from "react";
import logo from "./../img/logoipsum-255.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
import facbookIcone from './../img/icon/facebook.svg'
import instagramicon from './../img/icon/instagram.svg'
import twittericon from './../img/icon/twitter.svg'
import giticon from './../img/icon/github.svg'
import dribleicon from './../img/icon/dribbble.svg'

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="foote-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Incidunt
          consequuntur amet culpa cum itaque neque.
        </div>
        <div className="footer-manu">
          <div>About</div>
          <div>Career</div>
          <div>History</div>
          <div>Services</div>
          <div>Projects</div>
          <div>Blog</div>
        </div>
        <div className="footer-Icon">
          <div><img src={facbookIcone} alt="fb" style={{width:"20px",height:"20px"}}></img></div>
          <div><img src={instagramicon} alt="fb" style={{width:"20px",height:"20px"}}></img></div>
          <div><img src={twittericon} alt="fb" style={{width:"20px",height:"20px"}}></img></div>
          <div><img src={giticon} alt="fb" style={{width:"20px",height:"20px"}}></img></div>
          <div><img src={dribleicon} alt="fb" style={{width:"20px",height:"20px"}}></img></div>
        </div>
      </div>
    </>
  );
};
