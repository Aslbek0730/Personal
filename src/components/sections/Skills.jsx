import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { 
  SiHtml5, SiCss3, SiBootstrap, SiJavascript, 
  SiReact, SiVuedotjs, SiTypescript, SiPython, 
  SiDjango, SiPostgresql, SiGit, SiGithub 
} from 'react-icons/si'
import { fadeIn, staggerContainer, zoomIn } from '../../utils/animations.js'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillsData = [
    { 
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Bootstrap5', icon: <SiBootstrap /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'ReactJS', icon: <SiReact /> },
        { name: 'VueJS', icon: <SiVuedotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'DRF', icon: <SiDjango /> }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Git Bash', icon: <SiGit /> }
      ]
    }
  ]

  return (
    <SkillsSection id="skills" ref={ref}>
      <motion.div 
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2>Skills</h2>
      </motion.div>
      
      <SkillsContainer>
        {skillsData.map((category, index) => (
          <SkillCategory key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            
            <SkillsGrid
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skillIndex}
                  variants={zoomIn}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillBadge>
              ))}
            </SkillsGrid>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </SkillsSection>
  )
}

const SkillsSection = styled.section`
  padding: 80px 0;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const SkillCategory = styled.div``

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    height: 2px;
    width: 30px;
    background-color: ${props => props.theme.primary};
  }
`

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
`

const SkillBadge = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  padding: 16px;
  box-shadow: ${props => props.theme.cardShadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
  color: ${props => props.theme.primary};
`

const SkillName = styled.span`
  font-weight: 500;
  text-align: center;
`

export default Skills