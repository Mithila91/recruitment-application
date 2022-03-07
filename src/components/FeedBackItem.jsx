import Card from './shared/Card'

export default function FeedBackItem({ item }) {
  return (
    <Card>
      <div className="num-display">{item.id}</div>
      <div className="text-display">{item.name}</div>
      <div className="text-display">{item.age}</div>
      <div className="text-display">{item.email}</div>
      <div className="text-display">{item.address}</div>
    </Card>
  )
}
