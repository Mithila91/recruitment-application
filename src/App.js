import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import UserList from './components/UserList'
import FeedBackData from './data/dummyData'
import FormInput from './components/FormInput'

function App() {
  const [users, setFeedback] = useState(FeedBackData)

  const addUser = (newUser) => {
    newUser.id = uuidv4
    console.log(newUser)
    setFeedback([newUser, ...users])
  }

  const deleteUser = (id) => {
    //gives the array minus the user being deleted
    setFeedback(users.filter((user) => user.id !== id))
  }

  return (
    <>
      <Header text="not default header" />
      <div className="container">
        <FormInput handleAdd={addUser} />
        <UserList users={users} handleDelete={deleteUser} />
      </div>
    </>
  )
}

export default App
