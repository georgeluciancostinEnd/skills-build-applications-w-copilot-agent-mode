import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems(activitiesEndpoint).then(setActivities).catch((err) => setError(err.message)) }, [])
  return <CollectionPage title="Activity log" description="The latest movement across every team." error={error}>
    {activities.map((activity) => <article className="data-row" key={activity._id}><strong>{activity.type}</strong><span>{activity.user}</span><span>{activity.durationMinutes} min</span><b>+{activity.points} pts</b></article>)}
  </CollectionPage>
}

function CollectionPage({ title, description, error, children }) {
  return <section className="collection"><p className="eyebrow">LIVE DATA</p><h1>{title}</h1><p className="lead">{description}</p>{error ? <p className="error">{error}</p> : <div className="data-list">{children}</div>}</section>
}