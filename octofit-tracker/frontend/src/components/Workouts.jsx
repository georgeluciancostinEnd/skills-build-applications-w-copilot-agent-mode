import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems(workoutsEndpoint).then(setWorkouts).catch((err) => setError(err.message)) }, [])
  return <section className="collection"><p className="eyebrow">NEXT UP</p><h1>Workouts</h1><p className="lead">Focused sessions ready when you are.</p>{error ? <p className="error">{error}</p> : <div className="data-list">{workouts.map((workout) => <article className="data-row" key={workout._id}><strong>{workout.title}</strong><span>{workout.focus}</span><span>{workout.level}</span><b>{workout.durationMinutes} min</b></article>)}</div>}</section>
}