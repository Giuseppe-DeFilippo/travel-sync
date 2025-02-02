import './App.css'
import { UsersPage } from './pages/UsersPage'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="viaggi" element={<h2>lista utenti</h2>} />
                    <Route path="contactUs" element={<h2>contattaci</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
