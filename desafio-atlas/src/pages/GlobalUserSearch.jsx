import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { getUserInfo } from '../utils/getUserInfo';
import '../css/GlobalUserSearch.css';

const SVG_SEARCH_ICON = 'https://img.icons8.com/material-sharp/14/FFFFFF/search.png';

function GlobalUserSearch() {
  const history = useHistory();
  const [userValue, setUserValue] = useState('');
  const [emptyInputMessage, setEmptyInputMessage] = useState(false);
  const [invalidUserMessage, setInvalidUserMessage] = useState(false);

  const searchUserButton = async () => {
    if (userValue === '') {
      setInvalidUserMessage(false);
      return setEmptyInputMessage(true);
    }

    const data = await getUserInfo(userValue);

    if (data.message) {
      setEmptyInputMessage(false);
      return setInvalidUserMessage(true);
    }

    console.log(data, typeof data);
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

        <button className="search-button" type="button" onClick={ searchUserButton }>
          <img src={ SVG_SEARCH_ICON } alt="Search" />
          &nbsp;Buscar
        </button>
      </div>

      {
        emptyInputMessage && (
          <span className="alert">
            Informe um nome de usuário válido do github!
          </span>
        )
      }
      {
        invalidUserMessage && (
          <span className="alert">
            Usuário não encontrado no github.
            <br />
            Verifique se você digitou o nome corretamente!
          </span>
        )
      }
    </div>
  );
}

export default GlobalUserSearch;
