import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/dummyData'
import FormInput from './components/FormInput'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  const addUser = (newUser) => {
    console.log(newUser)
  }

  const deleteUser = (id) => {
    //gives the array minus the user being deleted
    setFeedback(feedback.filter((user) => user.id !== id))
  }

  return (
    <>
      <Header text="not default header" />
      <div className="container">
        <FormInput handleAdd={addUser} />
        <FeedBackList feedback={feedback} handleDelete={deleteUser} />
      </div>
    </>
  )
}

export default App
