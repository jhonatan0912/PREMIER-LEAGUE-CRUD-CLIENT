import React, { useEffect } from 'react'

import { usePlayer } from './../context/PlayerProvider'
import PlayerCard from './PlayerCard'


function PlayersPage() {
  const { players, loadPlayers } = usePlayer()

  useEffect(() => {
    loadPlayers()
  }, [])

  function renderMain() {
    if (players.length === 0) return <h1>No players yet</h1>

    return players.map(player => (
      <PlayerCard player={player} key={player.id} />
    ))
  }

  return (
    <div className='grid grid-cols-5 w-10/12 m-auto mt-10 gap-2'>
      {renderMain()}
    </div>
  )
}

export default PlayersPage