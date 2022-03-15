import axios from "axios";

export const getPokemons = async () => {
  let endpoint = "https://pokeapi.co/api/v2/pokemon?limit=10";

  const response = await axios.get(endpoint);

  return response.data;
};
