import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRepoInfo, getUserInfo } from '../utils/getUserInfo';
import Profile from '../components/Profile';
import Repos from '../components/Repos';
import '../css/User.css';

function User(props) {
  const { match } = props;
  const [userValue] = useState(match.params.id);
  const [userInfo, setUserInfo] = useState({});
  const [repoInfo, setRepoInfo] = useState([]);

  useEffect(() => {
    const searchUser = async () => {
      const user = await getUserInfo(userValue);
      setUserInfo(user);
      const repos = await getRepoInfo(userValue);
      setRepoInfo(repos);
    };

    searchUser();
  }, [userValue]);

  return (
    <div className="user-container">
      <Profile userInfo={ userInfo } />
      <div className="repositories">
        <img src="https://img.icons8.com/windows/15/000000/repository.png" alt="repository" />
        {' '}
        Repositories
        {' '}
        {repoInfo.length}
      </div>
      <div className="repos-container">
        {repoInfo.map((repo, index) => (
          <Repos key={ index } repo={ repo } />
        ))}
      </div>
    </div>
  );
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default User;
