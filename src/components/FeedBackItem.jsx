import { motion, AnimatePresence } from 'framer-motion'
import { FadeInAnimation } from './shared/Animations'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

export default function FeedBackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.id}</div>

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

FeedBackItem.prototype = {
  item: PropTypes.object.isRequired,
}
