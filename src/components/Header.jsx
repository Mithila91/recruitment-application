import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { titleFadeIn } from './shared/Animations'

export default function Header({ text }) {
  return (
    <motion.div
      variants={titleFadeIn}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <h2>{text}</h2>
    </motion.div>
  )
}
Header.protoTypes = {
  text: PropTypes.String,
}
Header.defaultProps = {
  text: 'Candidate List',
}
