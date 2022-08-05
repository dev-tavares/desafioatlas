import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { getUserInfo } from '../utils/getUserInfo';
import '../css/globalUser.css';

function GlobalUserSearch() {
  const history = useHistory();
  const [userValue, setUserValue] = useState('');

  const searchUser = async () => {
    const data = await getUserInfo(userValue);
    console.log(data);
    history.push(`/${userValue}`);
  };

  return (
    <div className="search-container">
      <span className="search-span">Buscar Repositório no Github</span>
      <div className="search-form">
        <input
          className="input-search"
          type="text"
          name="userValue"
          placeholder="digite o nome do usuário"
          onChange={
            ({ target }) => setUserValue(target.value)
          }
        />
        <button className="search-button" type="button" onClick={ searchUser }>
          <img src="https://img.icons8.com/material-sharp/14/FFFFFF/search.png" alt="Search" />
          &nbsp;Buscar
        </button>
      </div>
    </div>
  );
}

export default GlobalUserSearch;
