import React, { useEffect } from 'react';
import $ from 'jquery/dist/jquery'; // Import jQuery with the full path
import './AboutUs.css'; // Import the CSS file

/* global $ */ // Add this comment to inform ESLint about the global variable

const AboutUs = () => {
  useEffect(() => {
    $('.about-us').css('background-color', 'white');
  }, []);

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Perfume Heaven is your ultimate destination for exquisite fragrances.
        We offer a wide range of luxury perfumes sourced from the finest brands
        around the world. Immerse yourself in our captivating collection of scents
        that suit every occasion and style. Our expert team is dedicated to providing
        personalized assistance, ensuring you find the perfect fragrance that resonates
        with your unique personality. Visit us today and indulge in the blissful experience
        of exploring the world of perfumes.
      </p>
      <p className='contact'>Contact us at: <strong>+1 123-456-7890</strong></p>
    </div>
  );
};

export default AboutUs;
