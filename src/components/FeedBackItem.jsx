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
      <div className="text-display">{item.name}</div>
      <div className="text-display">{item.age}</div>
      <div className="text-display">{item.email}</div>
      <div className="text-display">{item.address}</div>
    </Card>
  )
}

FeedBackItem.prototype = {
  item: PropTypes.object.isRequired,
}
