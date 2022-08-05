/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';

function Profile({ userInfo }) {
  const { avatar_url, name, login, bios, followers, following } = userInfo;

  console.log(userInfo);
  return (
    <div>
      <img src={ avatar_url } alt="Profile avatar" />
      <p>
        {name}
      </p>
      <p>
        {login}
      </p>
      <button type="button">Follow</button>
      <p>
        {bios}
      </p>
      <p>
        {`"followers": ${followers}, "following": ${following},`}
      </p>
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
