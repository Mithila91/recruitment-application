import { motion, AnimatePresence } from 'framer-motion'
import { FadeInAnimation } from './shared/Animations'
import PropTypes from 'prop-types'
import FeedBackItem from './FeedBackItem'

export default function FeedBackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No data</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            variants={FadeInAnimation}
            initial="offscreen"
            animate="onscreen"
            exit={{ opacity: 0 }}
            key={item.id}
          >
            <FeedBackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ),
}
