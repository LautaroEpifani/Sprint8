import axios from "axios";

export const BASE_URL = "https://swapi.dev/api/starships/?page=1";

export const fetchStarships = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (e) {
    return [];
  }
};