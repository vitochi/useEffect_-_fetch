import { useState, useEffect } from "react"
import { UserList } from "./components/UserList"

export const UsersApp = () => {

  const [endPoint, setendPoint] = useState('users')

 /*  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch {
      console.error(error)
    }
  } */

  const handleFetch = () => {
    // fetchUsers()
    setendPoint('comments')
  }

  /* useEffect ( () => {  No se usa este useEffect porque al estar el boton con la funcion handleFetch ya
    fetchUsers()          no seria necesario
  }, []) */

  return (
    <>
      <h1>Lista de Usuarios:</h1>
      <UserList endPoint={endPoint}></UserList>
      {/* <ul>
        {users.map(user => <li key={user.id}>Nombre: {user.name}  |  Email: {user.email}</li>)}
      </ul> */}

      <button onClick={handleFetch}>Cargar Datos desde la Api</button>

    </>
  )
}
