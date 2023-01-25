import React from 'react'

import { usePlayer } from '../context/PlayerProvider'
import { useNavigate } from 'react-router-dom'

function PlayerCard({ player }) {
  const { deletePlayer } = usePlayer()
  const navigate = useNavigate()

  return (
    <div className='card border rounded-lg flex flex-col gap-3 p-3'>
      <img src={player.image} alt={player.name} className="w-full h-80 object-cover" />
      <p><b>Name: </b>{player.name}</p>
      <p><b>Nationality: </b>{player.nationality}</p>
      <p><b>Position: </b>{player.position}</p>
      <div className='flex justify-center gap-4'>
        <button
          onClick={() => {
            navigate(`edit/${player.id}`)
          }}
          className='bg-blue-700 text-white p-2 px-5 rounded-lg hover:scale-105'
        >
          Edit
        </button>

        <button
          onClick={() => {
            deletePlayer(player.id)
          }}
          className='bg-red-700 text-white p-2 px-5 rounded-lg hover:scale-105'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default PlayerCard