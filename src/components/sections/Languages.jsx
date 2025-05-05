import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { fadeIn, fadeInUp } from '../../utils/animations.js'

const Languages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const languagesData = [
    {
      language: 'English',
      level: 'Average',
      percentage: 60
    },
    {
      language: 'Russian',
      level: 'Average',
      percentage: 60
    },
    {
      language: 'Uzbek',
      level: 'Native',
      percentage: 100
    }
  ]

  return (
    <LanguagesSection id="languages" ref={ref}>
      <motion.div 
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2>Languages</h2>
      </motion.div>
      
      <LanguagesContainer
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        {languagesData.map((item, index) => (
          <LanguageItem key={index}>
            <LanguageInfo>
              <LanguageName>{item.language}</LanguageName>
              <LanguageLevel>{item.level}</LanguageLevel>
            </LanguageInfo>
            
            <ProgressBarContainer>
              <ProgressBarTrack>
                <ProgressBarFill 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </ProgressBarTrack>
              <ProgressPercentage>{item.percentage}%</ProgressPercentage>
            </ProgressBarContainer>
          </LanguageItem>
        ))}
      </LanguagesContainer>
    </LanguagesSection>
  )
}

const LanguagesSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.backgroundSecondary};
`

const LanguagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
`

const LanguageItem = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 12px;
  padding: 24px;
  box-shadow: ${props => props.theme.cardShadow};
`

const LanguageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

const LanguageName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`

const LanguageLevel = styled.span`
  font-weight: 500;
  color: ${props => props.theme.primary};
`

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ProgressBarTrack = styled.div`
  flex: 1;
  height: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: 10px;
  overflow: hidden;
`

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
`

const ProgressPercentage = styled.span`
  font-weight: 600;
  width: 40px;
  text-align: right;
`

export default Languages