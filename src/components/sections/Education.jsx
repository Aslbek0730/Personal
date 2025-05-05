import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { fadeIn, fadeInUp } from '../../utils/animations.js'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <EducationSection id="education" ref={ref}>
      <motion.div 
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2>Education</h2>
      </motion.div>
      
      <EducationContainer
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <EducationLogo>
          <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="TATU Logo" />
        </EducationLogo>
        
        <EducationContent>
          <EducationTitle>Tashkent University of Information Technologies (TATU)</EducationTitle>
          <EducationPeriod>2021 – 2025</EducationPeriod>
          <EducationField>Field: Programming Engineering</EducationField>
          <EducationDescription>
          Bachelor's degree graduate interested in modern software, web development and innovative technologies
          </EducationDescription>
        </EducationContent>
      </EducationContainer>
    </EducationSection>
  )
}

const EducationSection = styled.section`
  padding: 80px 0;
`

const EducationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 12px;
  padding: 32px;
  box-shadow: ${props => props.theme.cardShadow};
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`

const EducationLogo = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const EducationContent = styled.div`
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`

const EducationPeriod = styled.p`
  font-weight: 500;
  color: ${props => props.theme.primary};
  margin-bottom: 8px;
`

const EducationField = styled.p`
  font-weight: 500;
  margin-bottom: 16px;
`

const EducationDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-style: italic;
`

export default Education