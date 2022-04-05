import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/header.css';
import profilePicture from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import useHeaderSearch from '../hooks/useHeaderSearch';

const Header = (props) => {
  const { label, toggleSearch } = props;
  const { isVisibleSearchButton } = useHeaderSearch();
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <div className="header">
      <input
        data-testid="profile-top-btn"
        name="profile-btn"
        type="image"
        onClick={ handleClick }
        src={ profilePicture }
        alt="profile"
      />
      <h1 data-testid="page-title">{label}</h1>
      {
        isVisibleSearchButton && (
          <input
            data-testid="search-top-btn"
            name="search-btn"
            type="image"
            onClick={ toggleSearch }
            src={ searchIcon }
            alt="search"
          />
        )
      }
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  // isVisible: PropTypes.bool.isRequired,
  toggleSearch: PropTypes.func.isRequired,
};

export default Header;
