import React from 'react';
import Header from '../components/Header';

const Profile = () => {
  const isVisible = false;

  return (
    <Header
      label="Profile"
      isVisible={ isVisible }
    />
  );
};

export default Profile;
