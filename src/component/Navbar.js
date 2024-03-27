import { NavLink } from "react-router-dom";
import logo from "./../Foodlogo.svg";
import { Button } from "./Button";
import './Navbar.css'
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="part1">
          <img src={logo} alt="logo"></img>
          <span>GeekFoods</span>
        </div>
        <div className="part2">
        <NavLink to='/' className='HOMECOM'>Home</NavLink>
        <NavLink to='/Quotes'className='HOMECOM'>Quote</NavLink>
        <NavLink to='/Resturents' className='HOMECOM'>Resturents</NavLink>
        <NavLink className='HOMECOM'>Foods</NavLink>
        <NavLink to='/contact' className='HOMECOM'>Contact</NavLink>
        </div>
        <div className="part3">
          <Button fontColor={'#FFFFFF'} width={"105px"} boarderRadius={"6px"} backgroundColor={'RGB(30, 64, 175)'}>Get Start</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
