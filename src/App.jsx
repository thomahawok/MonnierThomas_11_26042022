import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HousingDetails from './pages/HousingDetails'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fiche-logement/:id" element={<HousingDetails />} />
            <Route path="/about" element={<About />} />
            {/*path="*" renvoi à la page erreur 404 si l'url de rien de déclaré au dessus*/}
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  )
}
export default App
