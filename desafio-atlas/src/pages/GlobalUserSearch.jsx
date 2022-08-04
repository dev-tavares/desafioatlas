import React, { useState } from 'react';
import getUserInfo from '../utils/getUserInfo';

function GlobalUserSearch() {
  const [userValue, setUserValue] = useState('');

  const searchUser = async () => {
    const data = await getUserInfo(userValue);
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        name="userValue"
        onChange={
          ({ target }) => setUserValue(target.value)
        }
      />
      <button type="button" onClick={ searchUser }>
        Buscar User
      </button>
    </div>
  );
}

export default GlobalUserSearch;
