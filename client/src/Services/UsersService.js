import axios from 'axios';

let userCached = [];
const baseUrl = 'http://localhost:8080/v1/users';

const getAll = async (options = { useCache: false }) => {
  if (options.useCache && userCached.length > 0) {
    return userCached;
  }
  try {
    const {data} = await axios.get(`${baseUrl}`);
    userCached = data.data;
    return userCached;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const addNewUser = (user) => {
  return axios.post(`${baseUrl}`, user);
}

const updateUser = (user) => {
  return axios.put(`${baseUrl}`, user);
}

export default {
  getAll,
  addNewUser,
  updateUser
};