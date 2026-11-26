import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login.jsx'
import AdminLogin from './pages/adminlogin.jsx'
import OrganizerLogin from './pages/organizerlogin.jsx'
import PlayerLogin from './pages/playerlogin.jsx'
import ViewerLogin from './pages/viewerlogin.jsx'
import Register from './pages/register.jsx'
import Teammanagerlogin from './pages/teammanagerlogin.jsx'
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/organizerlogin" element={<OrganizerLogin />} />
        <Route path="/playerlogin" element={<PlayerLogin />} />
        <Route path="/viewerlogin" element={<ViewerLogin />} />
        <Route path="/teammanager" element={<Teammanagerlogin/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App