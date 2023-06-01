import React from 'react';
import './welcom.css';
import { Link } from 'react-router-dom';

function Welcom() {
  return (
 <div className='page' >
  <div className='page2'>
    
  <div className='img'>
    <img src='img/p.png' className='img'/>
</div>
<div>
<Link to="/login"> <button  className='button'>Login</button></Link><br></br>
<Link to="/SignUp"><button  className='button'>Sign Up</button></Link>
    
   

</div>
  </div>


 </div>
  );
}

export default Welcom;
