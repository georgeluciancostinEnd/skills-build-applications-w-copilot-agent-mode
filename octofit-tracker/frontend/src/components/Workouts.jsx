import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems('workouts').then(setWorkouts).catch((err) => setError(err.message)) }, [])
  return <section className="collection"><p className="eyebrow">NEXT UP</p><h1>Workouts</h1><p className="lead">Focused sessions ready when you are.</p>{error ? <p className="error">{error}</p> : <div className="data-list">{workouts.map((workout) => <article className="data-row" key={workout._id}><strong>{workout.title}</strong><span>{workout.focus}</span><span>{workout.level}</span><b>{workout.durationMinutes} min</b></article>)}</div>}</section>
}