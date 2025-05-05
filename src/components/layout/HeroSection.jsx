import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations.js'
import { useTheme } from '../../context/ThemeContext.jsx'

const HeroSection = () => {
  const { theme } = useTheme()

  return (
    <HeroContainer id="home">
      <HeroBackground style={{ 
        background: theme.gradient
      }} />
      
      <HeroContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <HeroHeading>
            Axmedov <HighlightSpan>Aslbek</HighlightSpan>
          </HeroHeading>
          <HeroSubtitle>Fullstack Developer</HeroSubtitle>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <HeroImage
            src="/src/components/aslbek.jpg"
            alt="Akhmedov Aslbek"
          />
        </motion.div>
      </HeroContent>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <AboutSection>
          <AboutHeading>About Me</AboutHeading>
          <AboutText>
            Young and capable Fullstack developer looking to grow in the fullstack space. 
            I am a talented programmer. Becoming a senior is my goal!
          </AboutText>
        </AboutSection>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
          delay: 1
        }}
      >
        <ScrollIndicator />
      </motion.div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  overflow: hidden;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 60px;
  }
`

const HeroHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const HighlightSpan = styled.span`
  color: ${props => props.theme.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 8px;
    background-color: ${props => props.theme.primary};
    opacity: 0.2;
    z-index: -1;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 24px;
  color: ${props => props.theme.textSecondary};
  
  &::after {
    display: none;
  }
`

const HeroImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: ${props => props.theme.cardShadow};
  margin-top: 24px;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const AboutSection = styled.div`
  margin-top: 48px;
  text-align: center;
  max-width: 600px;
`

const AboutHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 16px;
`

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 25px;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.primary};
    border-radius: 50%;
  }
`

export default HeroSection