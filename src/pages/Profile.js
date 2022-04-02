import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => {
  const isVisible = false;
  const emailUser = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  function handleClick() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <Header
        label="Profile"
        isVisible={ isVisible }
      />
      <div>
        <p data-testid="profile-email">{emailUser.email}</p>
        <button
          data-testid="profile-done-btn"
          type="button"
          name="profile-done"
          value="btn-profile-done"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          name="profile-favorite"
          value="btn-profile-favorite"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="button"
          name="profile-logout"
          value="btn-profile-logout"
          onClick={ handleClick }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
