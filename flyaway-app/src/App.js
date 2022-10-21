import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Reserve from './components/Reserve'
import Vols from './components/Vols'
import Topbar from './components/Topbar'
import Paiement from './components/Paiement'
import Ticket from './components/Ticket'
import Enregistrement from './components/Enregistrement'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/reserve" element={<Reserve/>} />
        <Route  path="/vols" element={<Vols/>} />
        <Route path="/paiement" element={<Paiement/>} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/enregistrement" element={<Enregistrement />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
