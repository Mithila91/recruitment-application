import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import Card from './shared/Card'

export default function SearchUser() {
  const [searchUsers, setSearchUsers] = useState('')
  return (
    <div className="search-container">
      <input
        className="search-box"
        type="search"
        onChange={(e) => {
          setSearchUsers(e.target.value)
        }}
      />
      <FaSearch color="grey" className="search-icon" />
    </div>
  )
}
