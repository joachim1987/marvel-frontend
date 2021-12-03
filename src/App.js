import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Character from './pages/Character'
import Header from './components/Header'
import Comics from './pages/Comics'
import Charactercomic from './pages/Charactercomic'
import Favoris from './pages/Favoris'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/comics/:characterId" element={<Charactercomic />} />
      </Routes>
    </Router>
  )
}

export default App
