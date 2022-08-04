import axios from 'axios';

export default function getUserInfo(userValue) {
  const response = axios
    .get(`https://api.github.com/users/${userValue}`)
    .then((Response) => Response.data)
    .catch((error) => error);

  return response;
}
