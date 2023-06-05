import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      {/* <div>
        <Link to="/AboutUs">
          <button className="AboutUs">About-Us</button>
        </Link>
      </div> */}
      {/* <div>
        <Link to="/profile">
          <img src='img/profile.png' className="profile"/>
        </Link>
      </div> */}
      <div className='a1'>
        <h1>Contact US :</h1>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
          <span className="material-icons"></span>
          Email
        </a>
        <a href="tel:+1234567890">
          <span className="material-icons"></span>
          Phone Number
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <span className="material-icons"></span>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
