import { motion } from 'framer-motion'

export const FadeInAnimation = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}
