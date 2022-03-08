import { motion, AnimatePresence } from 'framer-motion'
import { FadeInAnimation } from './shared/Animations'
import { useContext } from 'react'
import { FaEdit, FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import UserContext from '../context/UserContext'

export default function UserItem({ item, handleDelete }) {
  const { updateUser } = useContext(UserContext)
  return (
    <Card reverse={true}>
      <div className="num-display">{item.id}</div>
      <button onClick={() => updateUser(item)} className="edit">
        <FaEdit color="white" />
      </button>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="white" />
      </button>

      <div className="text-display">
        <p>name</p> {item.name}
        <p>age</p> {item.age}
        <p>email</p> {item.email}
        <p>address</p>
        {item.address}
      </div>
    </Card>
  )
}

UserItem.prototype = {
  item: PropTypes.object.isRequired,
}
