import axios from "axios";

export const createPlayerRequest = async (player) => {
  return await axios.post('http://localhost:3000/api/players'), player;
}

export const getPlayersRequest = async () => {
  return await axios.get('http://localhost:3000/api/players');
}

export const getPlayerRequest = async (id) => {
  return await axios.get(`http://localhost:3000/api/players/${id}`);
}

export const updatePlayerRequest = async (id, newFields) => {
  return await axios.patch(`http://localhost:3000/api/players/${id}`, newFields);
}

export const deletePlayerRequest = async (id) => {
  return await axios.delete(`http://localhost:3000/api/players/${id}`);
}