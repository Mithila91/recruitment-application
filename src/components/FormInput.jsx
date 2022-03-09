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

  //Search function

  return (
    <div>
      <Card>
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Add new talent</h2>

          <div className="input-group">
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
              type="text"
              placeholder="Name"
            />

            <input
              onChange={(e) => {
                setAge(e.target.value)
              }}
              value={age}
              type="number"
              placeholder="age"
            />

            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              type="email"
              placeholder="email"
            />

            <input
              onChange={(e) => {
                setAddress(e.target.value)
              }}
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
