import callWebApi from '../helpers/webApiHelper';

export const getUsersList = async (options) => {
  const API_URL = 'https://randomuser.me/api';

  const response = await callWebApi({
    endpoint: API_URL,
    type: 'GET',
    query: { ...options }
  });
  return response.json();
};
