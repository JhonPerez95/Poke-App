import axios from 'axios';

const urlApi = process.env.REACT_APP_API;

export const getPokemon = async () => {
  try {
    const res = await axios.get(`${urlApi}/pokemon/`);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};
