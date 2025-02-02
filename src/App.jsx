import './App.css'
import HomePage from './pages/HomePage'
import TravelPage from "./pages/TravelPage"
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                     <Route path="viaggi" element={<TravelPage />} />
                     <Route path="listaUtenti" element={<h2>lista utenti</h2>} />
                     <Route path="contactUs" element={<h2>contattaci</h2>} />
                </Route>         
            </Routes>
        </BrowserRouter>
    )
}

export default App
