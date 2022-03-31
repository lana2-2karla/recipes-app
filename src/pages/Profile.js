import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => {
  const isVisible = false;

  return (
    <div>
      <Header
        label="Profile"
        isVisible={ isVisible }
      />
      <Footer />
    </div>
  );
};

export default Profile;
