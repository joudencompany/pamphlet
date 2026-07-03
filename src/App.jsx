import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import HomePage from './pages/HomePage'
import TentInfoPage from './pages/TentInfoPage'

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tent-info" element={<TentInfoPage />} />
    </Routes>
    </>

  )
}