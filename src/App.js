import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import UserList from './components/UserList'
import dummyData from './data/dummyData'
import FormInput from './components/FormInput'
import SearchUser from './components/SearchUser'
import { FaSearch } from 'react-icons/fa'
import { UserProvider } from './context/UserContext'

function App() {
  const [searchUsers, setSearchUsers] = useState('')
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
    <UserProvider>
      <Header text="Recruitment App" />
      <SearchUser />
      <div className="container">
        <FormInput handleAdd={addUser} />

        <UserList users={users} handleDelete={deleteUser} />
      </div>
    </UserProvider>
  )
}

export default App
