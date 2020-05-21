import axios from 'axios';
const urlApi = process.env.REACT_APP_API;

const getPokemon = async (url) => {
  try {
    const res = await axios.get(url);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const infoPokemon = async (id) => {
  try {
    const res = await axios.get(`${urlApi}/pokemon-species/${id}`);
    // console.log(res.data.flavor_text_entries[0].language.name);
    const array = res.data.flavor_text_entries;
    for (let i = 0; i < array.length; i++) {
      if (array[i].language.name === 'es') {
        return array[i].flavor_text;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export { infoPokemon, getPokemon };
