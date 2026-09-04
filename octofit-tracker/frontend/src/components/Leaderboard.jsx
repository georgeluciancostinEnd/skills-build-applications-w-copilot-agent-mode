import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems(leaderboardEndpoint).then(setEntries).catch((err) => setError(err.message)) }, [])
  return <section className="collection"><p className="eyebrow">COMPETITION</p><h1>Leaderboard</h1><p className="lead">Small wins, made visible.</p>{error ? <p className="error">{error}</p> : <div className="data-list">{entries.map((entry) => <article className="data-row rank-row" key={entry._id}><b className="rank">#{entry.rank}</b><strong>{entry.user}</strong><span>{entry.team}</span><b>{entry.points} pts</b></article>)}</div>}</section>
}