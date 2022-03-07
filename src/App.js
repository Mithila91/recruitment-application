import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/dummyData'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  return (
    <>
      <Header text="not default header" />
      <FeedBackList feedback={feedback} />
    </>
  )
}

export default App
