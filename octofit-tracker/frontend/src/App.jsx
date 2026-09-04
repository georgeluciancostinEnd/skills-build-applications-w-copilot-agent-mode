import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiBaseUrl, isCodespaceConfigured } from './api.js'
import './App.css'

const navigation = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Users'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="overview">
      <p className="eyebrow">OCTOFIT TRACKER / CONTROL ROOM</p>
      <h1>Move together.<br />See the progress.</h1>
      <p className="lead">A clear view of the activity, people, and momentum across your fitness community.</p>
      <div className="overview-links">
        <NavLink className="primary-link" to="/activities">View recent activity</NavLink>
        <NavLink className="text-link" to="/leaderboard">Open leaderboard</NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/">OCTOFIT <span>TRACKER</span></NavLink>
        <nav aria-label="Main navigation">
          {navigation.map(([path, label]) => <NavLink key={path} className={({ isActive }) => isActive ? 'active' : ''} to={path}>{label}</NavLink>)}
        </nav>
      </header>
      {!isCodespaceConfigured && <div className="config-note">Using localhost API. Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> for Codespaces.</div>}
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
      <footer>API: {apiBaseUrl}</footer>
    </div>
  )
}

export default App
