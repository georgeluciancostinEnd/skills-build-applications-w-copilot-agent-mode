import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems('teams').then(setTeams).catch((err) => setError(err.message)) }, [])
  return <section className="collection"><p className="eyebrow">COMMUNITY</p><h1>Teams</h1><p className="lead">Groups keeping each other in motion.</p>{error ? <p className="error">{error}</p> : <div className="data-list">{teams.map((team) => <article className="data-row" key={team._id}><strong>{team.name}</strong><span>Captain: {team.captain}</span><b>{team.memberCount} members</b></article>)}</div>}</section>
}