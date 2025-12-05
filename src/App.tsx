import { Routes, Route } from 'react-router-dom'
import TibsovoPage from './pages/TibsovoPage'

function App() {
  return (
    <Routes>
      <Route path="/tibsovo" element={<TibsovoPage />} />
    </Routes>
  )
}

export default App

