import { useState } from "react"
import { useEffect } from "react"

export const UsersApp = () => {

const [users, setUsers] = useState([])

const fetchUsers = async() => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    setUsers(data)
  }catch{
    console.error(error)
  }
}

  return (
    <>
    <h1>Lista de Usuarios:</h1>
    <ul>
      <li>usuario uno</li>
      <li>usuario dos</li>
    </ul>
    </>
  )
}
