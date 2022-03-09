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

export const titleFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      when: 'beforeChildren',
      staggerChildren: 2,
    },
  },
}

export const hoverAnimation = {
  hover: {
    y: [0, -11],
    rotateX: [0, 10],
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
  rotateHover: {
    rotate: 360,
    transition: {
      type: 'spring',
      duration: 4,
    },
  },
}
