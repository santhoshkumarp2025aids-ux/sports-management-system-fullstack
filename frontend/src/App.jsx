import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login.jsx'
import AdminLogin from './pages/adminlogin.jsx'
import OrganizerLogin from './pages/organizerlogin.jsx'
import PlayerLogin from './pages/playerlogin.jsx'
import ViewerLogin from './pages/viewerlogin.jsx'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/organizerlogin" element={<OrganizerLogin />} />
        <Route path="/playerlogin" element={<PlayerLogin />} />
        <Route path="/viewerlogin" element={<ViewerLogin />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App