import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Character from './pages/Character'
import Header from './components/Header'
import Comics from './pages/Comics'
import Charactercomic from './pages/Charactercomic'

// Mettre en place react router
// Créer la navigation (Characters, Comics, Favorites)
// Header avec 3 Link

// Requête au serveur pour récupérer une liste de personnages

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<Charactercomic />} />
      </Routes>
    </Router>
  )
}

export default App
