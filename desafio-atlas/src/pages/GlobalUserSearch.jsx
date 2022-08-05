import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { getUserInfo } from '../utils/getUserInfo';

function GlobalUserSearch() {
  const history = useHistory();
  const [userValue, setUserValue] = useState('');

  const searchUser = async () => {
    const data = await getUserInfo(userValue);
    console.log(data);
    history.push(`/${userValue}`);
  };

  return (
    <div>
      <h1>Buscar Repositório no Github</h1>
      <input
        type="text"
        name="userValue"
        placeholder="digite o nome do usuário"
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
