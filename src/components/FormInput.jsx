import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

export default function FormInput({ handleAdd }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      id: null,
      name: '',
      email: '',
      age: 0,
      address: '',
    }
    handleAdd(newUser)
    setName('')
  }

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>Add new user</h2>

          <div className="input-group">
            <input
              onChange={handleNameChange}
              value={name}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleAge}
              value={age}
              type="number"
              placeholder="age"
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="email"
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleAddress}
              value={address}
              type="text"
              placeholder="address"
            />
          </div>
          <Button type="submit" version="secondary">
            ADD
          </Button>
        </form>
      </Card>
    </div>
  )
}
