import { motion, AnimatePresence } from 'framer-motion'
import { FadeInAnimation } from './shared/Animations'
import PropTypes from 'prop-types'
import UserItem from './UserItem'

export default function UserList({ users, handleDelete }) {
  if (!users || users.length === 0) {
    return <p>No Users to show</p>
  }

  return (
    <div className="user-list">
      <AnimatePresence>
        {users.map((item) => (
          <motion.div
            variants={FadeInAnimation}
            initial="offscreen"
            animate="onscreen"
            exit={{ opacity: 0 }}
            key={item.id}
          >
            <UserItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ),
}
