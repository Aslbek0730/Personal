import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { MdSearch, MdPeople, MdAccessTime, MdFlashOn } from 'react-icons/md'
import { fadeIn, fadeInUp } from '../../utils/animations.js'

const SoftSkills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const softSkillsData = [
    {
      icon: <MdSearch size={36} />,
      title: 'Independent problem solving',
      description: 'Ability to identify issues and find creative solutions independently.'
    },
    {
      icon: <MdPeople size={36} />,
      title: 'Teamwork',
      description: 'Effectively collaborate with others to achieve common goals.'
    },
    {
      icon: <MdAccessTime size={36} />,
      title: 'Effective time management',
      description: 'Efficiently organize tasks and meet deadlines consistently.'
    },
    {
      icon: <MdFlashOn size={36} />,
      title: 'Fast adaptability',
      description: 'Quickly adapt to new technologies and changing requirements.'
    }
  ]

  return (
    <SoftSkillsSection ref={ref}>
      <motion.div 
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2>Soft Skills</h2>
      </motion.div>
      
      <SkillsGrid>
        {softSkillsData.map((skill, index) => (
          <SkillCard
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={index * 0.1}
          >
            <IconContainer>
              {skill.icon}
            </IconContainer>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SoftSkillsSection>
  )
}

const SoftSkillsSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.backgroundSecondary};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 12px;
  padding: 24px;
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`

const IconContainer = styled.div`
  color: ${props => props.theme.primary};
  margin-bottom: 16px;
`

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 12px;
`

const SkillDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.95rem;
`

export default SoftSkills