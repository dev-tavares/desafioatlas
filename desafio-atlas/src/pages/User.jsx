import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRepoInfo, getUserInfo } from '../utils/getUserInfo';
import Profile from '../components/Profile';
import Repos from '../components/Repos';

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
    <div>
      <Profile userInfo={ userInfo } />
      <div>
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
