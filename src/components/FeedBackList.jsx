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
