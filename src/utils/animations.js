// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
}

// Fade in from bottom animation
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

// Staggered children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Fade in from left animation
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
}

// Fade in from right animation
export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
}

// Zoom in animation
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

// Card hover animation
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  hover: {
    y: -10,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
}

// Button hover animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 }
}