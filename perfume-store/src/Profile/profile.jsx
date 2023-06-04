import React from 'react';
import './Profile.css'; // Import the CSS file

function Profile(props) {
  const { name, email, password } = props;

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile</h1>
      <div>
        <h2 className="section-heading">Personal Information</h2>
        <p className="info-item">Name: {name}</p>
        <p className="info-item">Email: {email}</p>
        <p className="info-item">Password: {password}</p>
      </div>
    </div>
  );
}

export default Profile;
