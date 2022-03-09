import { motion, AnimatePresence } from 'framer-motion'
import { hoverAnimation } from './shared/Animations'
import { useContext } from 'react'
import { FaEdit, FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import UserContext from '../context/UserContext'

export default function UserItem({ item, handleDelete }) {
  const { updateUser } = useContext(UserContext)
  return (
    <Card reverse={true}>
      <div className="display"></div>
      <motion.button
        variants={hoverAnimation}
        initial="hover"
        animate="rotateHover"
        onClick={() => updateUser(item)}
        className="edit"
      >
        <FaEdit color="white" />
      </motion.button>
      <motion.button
        variants={hoverAnimation}
        initial="hover"
        animate="rotateHover"
        onClick={() => handleDelete(item.id)}
        className="close"
      >
        <FaTimes color="white" />
      </motion.button>

      <div className="text-display">
        <p>Name:</p> {item.name}
        <p>Age:</p> {item.age}
        <p>Email:</p> {item.email}
        <p>Address:</p>
        {item.address}
      </div>
    </Card>
  )
}

UserItem.prototype = {
  item: PropTypes.object.isRequired,
}
