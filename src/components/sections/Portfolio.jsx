import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { staggerContainer, fadeIn, cardHover } from '../../utils/animations.js'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      id: 1,
      name: 'FastFood Order Platform',
      description: 'A comprehensive solution for food ordering and delivery management.',
      technologies: ['Django', 'HTML/CSS'],
      github: 'https://github.com/Aslbek0730/Fastfood.git',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Education Platform',
      description: 'Interactive platform for online learning and course management.',
      technologies: ['React', 'Django', 'DRF'],
      github: 'https://github.com/Aslbek0730/fullstack10.git',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ]

  return (
    <PortfolioSection id="portfolio" ref={ref}>
      <motion.div 
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2>Portfolio</h2>
      </motion.div>
      
      <ProjectsGrid
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial="rest"
            whileHover="hover"
            variants={cardHover}
          >
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechBadge key={index}>{tech}</TechBadge>
                ))}
              </TechStack>
              
              <ProjectLinks>
                <GithubLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub Repository
                </GithubLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioSection>
  )
}

const PortfolioSection = styled.section`
  padding: 80px 0;
`

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.cardShadow};
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`

const ProjectContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 16px;
  flex-grow: 1;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`

const TechBadge = styled.span`
  font-size: 0.85rem;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
  padding: 4px 10px;
  border-radius: 16px;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
`

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: ${props => props.theme.primary};
  
  &:hover {
    text-decoration: underline;
  }
`

export default Portfolio