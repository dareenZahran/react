// import React, { useEffect, useState } from 'react';
// import './ImageSequence.css'; // Import the CSS file
// import { Link } from 'react-router-dom';

//  import Login from '../login/login';

// const ImageSequence = () => {
 

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const delay = 3000; // Delay in milliseconds (4 seconds)
//   const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (currentImageIndex < images.length - 1) {
//         setCurrentImageIndex(currentImageIndex + 1);
//       } else {
//         setCurrentImageIndex(0);
//       }
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [currentImageIndex]);

//   return (
    
//        <div className="image-sequence-container">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={`${process.env.PUBLIC_URL}/img/${image}`}
//           className={`image-sequence-img ${index === currentImageIndex ? 'show' : 'hide'}`}
//           alt={`Image ${index + 1}`}
//         />
//       ))}
//        <div className="image-text-overlay">
//             <p>Welcome To My <br/>Perfume</p>
//           </div>
//     </div>
    
 
//   );
// };

// export default ImageSequence;











import React, { useEffect, useState } from 'react';
import './ImageSequence.css'; // Import the CSS file
 import { Link } from 'react-router-dom';

const ImageSequence = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLoginButton, setShowLoginButton] = useState(false);

  const imageDelay = 2000; // Delay in milliseconds for image sequence
  const loginButtonDelay = 1000; // Delay in milliseconds for login button

  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    }, imageDelay);

    const loginButtonTimer = setTimeout(() => {
      setShowLoginButton(true);
    }, loginButtonDelay);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(loginButtonTimer);
    };
  }, [currentImageIndex]);

  return (
    <div className="image-sequence-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/img/${image}`}
          className={`image-sequence-img ${index === currentImageIndex ? 'show' : 'hide'}`}
          alt={`Image ${index + 1}`}
        />
      ))}
      <div className="image-text-overlay">
        <p>Welcome To My <br />Perfume</p>
        {showLoginButton && (
          
          <Link to={'./login'} className="login">
          <div className="login-button-container">
            LOGIN
            </div>
            </Link>
          
        )}
      </div>
    </div>
  );
};

export default ImageSequence;

