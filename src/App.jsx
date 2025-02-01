import './App.css'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>        
            </Routes>
        </BrowserRouter>
    )
}

export default App
