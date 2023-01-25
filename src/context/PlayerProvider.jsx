import { useContext, useState } from 'react'
import {
  createPlayerRequest,
  getPlayersRequest,
  getPlayerRequest,
  updatePlayerRequest,
  deletePlayerRequest
} from '../api/players.api'
import { PlayerContext } from './PlayerContext'


export const usePlayer = () => {
  const context = useContext(PlayerContext);

  return context
}

export const PlayerContextProvider = ({ children }) => {
  const [players, setPlayers] = useState([])

  const createPlayer = async (player) => {
    await createPlayerRequest(player)
  }

  const loadPlayers = async () => {
    const response = await getPlayersRequest()
    setPlayers(response.data)
  }

  const getPlayer = async (id) => {
    const response = await getPlayerRequest(id)
    return response.data
  }

  const updatePlayer = async (id, newFields) => {
    const response = await updatePlayerRequest(id, newFields)
    console.log(response)
  }

  const deletePlayer = async (id) => {
    const response = await deletePlayerRequest(id)
    setPlayers(players.filter(players => players.id != id))
  }

  return <PlayerContext.Provider value={{ players, loadPlayers, createPlayer, getPlayer, updatePlayer, deletePlayer }}>{children}</PlayerContext.Provider>
}

