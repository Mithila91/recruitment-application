import PropTypes from 'prop-types'
import FeedBackItem from './FeedBackItem'

export default function FeedBackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No data</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
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
