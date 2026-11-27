import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import AdminDashboard from './pages/admin/admindashboard.jsx'
import AdminLayout from './pages/admin/adminlayout.jsx'
import UserDetails from './pages/admin/userdetails.jsx'
import AdminSettings from './pages/admin/adminsettings.jsx'
import TeamManagerLayout from './pages/teammanager/teammanagerlayout.jsx'
import TeamManagerDashboard from './pages/teammanager/teammanagerdashboard.jsx'
import Teams from './pages/teammanager/teams.jsx'
import Players from './pages/teammanager/players.jsx'
import PlayerLayout from './pages/player/playerlayout.jsx'
import PlayerDashboard from './pages/player/playerdashboard.jsx'
import PlayerProfile from './pages/player/playerprofile.jsx'
import MatchSchedules from './pages/player/matchschedules.jsx'
import OrganizerLayout from './pages/organizer/organizerlayout.jsx'
import OrganizerDashboard from './pages/organizer/organizerdashboard.jsx'
import Tournaments from './pages/organizer/tournaments.jsx'
import Matches from './pages/organizer/matches.jsx'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}></Route>

          <Route path="/admin" element={<AdminLayout />}>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="usersdetails" element={<UserDetails />} />
          <Route path="adminsettings" element={<AdminSettings />} />
        </Route>

          <Route path="/teammanager" element={<TeamManagerLayout />}>
          <Route path="teammanagerdashboard" element={<TeamManagerDashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
        </Route>

        <Route path="/player" element={<PlayerLayout />}>
    <Route path="playerdashboard" element={<PlayerDashboard />} />
    <Route path="playerprofile" element={<PlayerProfile />} />
    <Route path="matchschedules" element={<MatchSchedules />} />
</Route>

        <Route path="/organizer" element={<OrganizerLayout />}>
          <Route path='organizerdashboard' element={<OrganizerDashboard />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="matches" element={<Matches />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App