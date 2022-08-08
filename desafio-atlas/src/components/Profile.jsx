/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import '../css/Profile.css';

const SVG_PEOPLE_ICON = 'https://raw.githubusercontent.com/primer/octicons/a20f6d75937ca464d5087eefb63152d1d605cb60/icons/people-24.svg';

function Profile({ userInfo }) {
  const { avatar_url, name, login, bios, followers, following } = userInfo;

  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={ avatar_url }
        alt="Profile avatar"
      />
      <div className="info-container">
        <p className="user-name">
          {name}
        </p>
        <p className="user-login">
          {login}
        </p>
        <button
          className="follow-button"
          type="button"
        >
          Follow

        </button>
        <p className="user-bios">
          {bios}
        </p>
        <div className="followers-following">
          <img
            className="people-icon"
            src={ SVG_PEOPLE_ICON }
            alt=""
          />
            &nbsp;
          <b>{followers}</b>
            &nbsp;
          <span>followers</span>
            &nbsp;
          <span>·</span>
            &nbsp;
          <b>{following}</b>
            &nbsp;
          <span>following</span>
        </div>
        <hr />
      </div>
    </div>
  );
}

Profile.propTypes = {
  userInfo: PropTypes.shape({
    avatar_url: PropTypes.string,
    bios: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    login: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Profile;
