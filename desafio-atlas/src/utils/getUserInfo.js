import axios from 'axios';

export function getUserInfo(userValue) {
  const response = axios
    .get(`https://api.github.com/users/${userValue}`)
    .then((Response) => Response.data)
    .catch((error) => error);

  return response;
}

export function getRepoInfo(userValue) {
  const response = axios
    .get(`https://api.github.com/users/${userValue}/repos`)
    .then((Response) => Response.data)
    .catch((error) => error);

  return response;
}
