import PropTypes from 'prop-types'

export default function Header({ text }) {
  return (
    <div className="container">
      <h2>{text}</h2>
    </div>
  )
}
Header.protoTypes = {
  text: PropTypes.String,
}
Header.defaultProps = {
  text: 'Candidate List',
}
