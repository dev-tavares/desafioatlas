import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRepoInfo, getUserInfo } from '../utils/getUserInfo';

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
  }, []);

  return (
    <div>
      <div>
        <img src={ userInfo.avatar_url } alt="Profile avatar" />
        <p>
          {userInfo.name}
        </p>
        <p>
          {userInfo.login}
        </p>
        <button type="button">Follow</button>
        <p>
          {userInfo.bios}
        </p>
        <p>
          {`"followers": ${userInfo.followers}, "following": ${userInfo.following},`}
        </p>
      </div>
      <div>
        {repoInfo.map((repo, index) => (
          <div key={ index }>
            <p>
              {repo.name}
            </p>
            <p>
              {repo.language}
            </p>
            {repo.description && <p>{`Description ${repo.description}`}</p>}
            <p>
              Updated on
              {' '}
              {new Date(repo.updated_at)
                .toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
            </p>
          </div>
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
