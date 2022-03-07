import Card from './shared/Card'
import { useState } from 'react'

export default function FormInput() {
  const [name, setName] = useState('')
  // const [age, setAge] = useState(0)
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Card>
        <form>
          <h2>Add new user</h2>
          {/* add rating select component here */}
          <div className="input-group">
            <input
              onChange={handleNameChange}
              value={name}
              type="text"
              placeholder="Name"
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </Card>
    </div>
  )
}
