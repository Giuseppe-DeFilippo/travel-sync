import { UsersPage } from './pages/UsersPage'
import HomePage from './pages/HomePage'
import TravelPage from './pages/TravelPage'
import AboutUsPage from './pages/AboutUsPage'
import { Layout, Layout2 } from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/" element={<Layout2 />}>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="viaggi" element={<TravelPage />} />
                    <Route path="contactUs" element={<AboutUsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
