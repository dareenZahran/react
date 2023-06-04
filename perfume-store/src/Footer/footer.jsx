import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="/AboutUs">
        <button className="AboutUs">About-Us</button>
      </Link>
    </footer>
  );
}

export default Footer;






