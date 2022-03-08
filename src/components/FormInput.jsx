import { useState, useEffect, useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import UserContext from '../context/UserContext'

export default function FormInput({ handleAdd }) {
  const { userEdit } = useContext(UserContext)

  useEffect(() => {
    if (userEdit.edit === true) {
      setName(userEdit.item.name)
      setAge(userEdit.item.age)
      setEmail(userEdit.item.email)
      setAddress(userEdit.item.address)
    }
  }, [userEdit])

  const [name, setName] = useState('')
  const [age, setAge] = useState()
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
      name,
      email,
      age,
      address,
    }
    handleAdd(newUser)
    setName('')
    setAge('')
    setEmail('')
    setAddress('')
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

            <input
              onChange={handleAge}
              value={age}
              type="number"
              placeholder="age"
            />

            <input
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="email"
            />

            <input
              onChange={handleAddress}
              value={address}
              type="text"
              placeholder="address"
            />
          </div>
          <div className="btn-container">
            <Button type="submit" version="secondary">
              ADD
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
