import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isClassRemoved, setIsClassRemoved] = useState(false);

  const handleClick = (event) => {
    const clickedElement = event.target;
    setIsClassRemoved(true);
    setToggleMenu(false)
    
  }

return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.zarzo} alt="app logo"></img>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-book">
    <a href="/" className="p__opensans">Log In / Registration</a>
    <div />
      <a href="/" className="p__opensans">Book Table</a>
      
    </div>

    <div className="app__navbar-smallscreen">
      <div className="hamburger__menu" style={{ cursor: 'pointer' }}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      </div>

    {toggleMenu && (
      <div className={`app__navbar-smallscreen_overlay flex__center slide-bottom `}>
        <MdOutlineRestaurantMenu fontSize={27} className={`overlay__close ${isClassRemoved ? '' : 'hide__menu'}`} onClick={() => setToggleMenu(false)} />
        <ul className={`app__navbar-smallscreen-links `} onClick={handleClick}>
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#awards">Awards</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    )}

    </div>
  </nav>
)

}

export default Navbar;
