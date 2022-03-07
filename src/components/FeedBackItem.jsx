import { useState } from 'react'

export default function FeedBackItem() {
  const [rating, setRating] = useState(7)
  const [name, setName] = useState('Initial Name')
  const [age, setAge] = useState(1)
  const [email, setEmail] = useState('mithilas@gmail.com')
  const [address, setAddress] = useState('box 112')

  const handleClick = (e) => {
    setRating((prev) => {
      return 1
    })
  }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{name}</div>
      <div className="text-display">{age}</div>
      <div className="text-display">{email}</div>
      <div className="text-display">{address}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
