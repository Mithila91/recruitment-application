import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import UserList from './components/UserList'
import dummyData from './data/dummyData'
import FormInput from './components/FormInput'

function App() {
  const [users, setUser] = useState(dummyData)

  const addUser = (newUser) => {
    newUser.id = uuidv4
    console.log(newUser)
    setUser([newUser, ...users])
  }

  const deleteUser = (id) => {
    //gives the array minus the user being deleted
    setUser(users.filter((user) => user.id !== id))
  }

  return (
    <>
      <Header text="Recruitment App" />
      <div className="container">
        <FormInput handleAdd={addUser} />
        <UserList users={users} handleDelete={deleteUser} />
      </div>
    </>
  )
}

export default App
