import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchItems(usersEndpoint).then(setUsers).catch((err) => setError(err.message)) }, [])
  return <section className="collection"><p className="eyebrow">MEMBERS</p><h1>Users</h1><p className="lead">Everyone showing up for their next session.</p>{error ? <p className="error">{error}</p> : <div className="data-list">{users.map((user) => <article className="data-row" key={user._id}><strong>{user.name}</strong><span>{user.email}</span><span>{user.team}</span><b>{user.points} pts</b></article>)}</div>}</section>
}