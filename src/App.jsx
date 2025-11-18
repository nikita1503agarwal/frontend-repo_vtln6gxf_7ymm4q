import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Travel from './pages/Travel'
import Locked from './pages/Locked'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reisen" element={<Travel />} />
      <Route path="/fahrzeuge" element={<Locked title="Meine Fahrzeuge" />} />
      <Route path="/ps-farbebild" element={<Locked title="PS-Farbebild" />} />
      <Route path="/technik" element={<Locked title="Technische Specs" />} />
      <Route path="/erfolge" element={<Locked title="Achievements" />} />
      <Route path="/projekte" element={<Locked title="Weitere Projekte" />} />
    </Routes>
  )
}

export default App
