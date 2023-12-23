import { useState, useEffect } from "react"

export const UsersApp = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch {
      console.error(error)
    }
  }

  useEffect ( () => {
    fetchUsers()
  }, [])

  return (
    <>
      <h1>Lista de Usuarios:</h1>
      <ul>
        {users.map(user => <li key={user.id}>Nombre: {user.name} | Email: {user.email}</li>)}
      </ul>
    </>
  )
}
