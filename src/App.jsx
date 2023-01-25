import React from 'react'

import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import PlayerForm from './components/PlayerForm';
import PlayersPage from './components/PlayersPage';
import { PlayerContextProvider } from './context/PlayerProvider'

function App() {
  return (
    <PlayerContextProvider>
      <NavBar />

      <Routes>
        <Route path='/' element={<PlayersPage />} />
        <Route path='/new' element={<PlayerForm />} />
        <Route path='/edit/:id' element={<PlayerForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </PlayerContextProvider>
  )
}

export default App