import axios from 'axios';

const urlApi = process.env.REACT_APP_API;

const getPokemon = async () => {
  try {
    const res = await axios.get(`${urlApi}/pokemon/`);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

const infoPokemon = async (id) => {
  try {
    const res = await axios.get(`${urlApi}/pokemon-species/${id}`);
    console.log(res.data.flavor_text_entries[11].flavor_text);
    return res.data.flavor_text_entries[11].flavor_text;
  } catch (err) {
    console.log(err);
  }
};

export { infoPokemon, getPokemon };
