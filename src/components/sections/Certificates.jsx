import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { fadeIn, staggerContainer, cardHover } from '../../utils/animations.js'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const certificatesData = [
    {
      id: 1,
      title: 'IT Park Fullstack Course',
      issuer: 'IT Park',
      date: '2023',
      duration: '1 year',
      link: '#'
    },
    {
      id: 2,
      title: 'Frontend Certificate',
      issuer: 'Coursera',
      date: '2022',
      duration: '3 months',
      link: 'https://coursera.org/share/40a1281213e8dc567e613a0f7c73e444'
    },
    {
      id: 3,
      title: 'Backend Certificate',
      issuer: 'Coursera',
      date: '2022',
      duration: '3 months',
      link: 'https://coursera.org/share/2fecd72315f92c4f51b93664add213f2'
    }
  ]

  return (
    <CertificatesSection id="certificates" ref={ref}>
      <motion.div 
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2>Certificates</h2>
      </motion.div>
      
      <CertificatesGrid
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {certificatesData.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            initial="rest"
            whileHover="hover"
            variants={cardHover}
          >
            <CertificateContent>
              <CertificateTitle>{certificate.title}</CertificateTitle>
              <CertificateIssuer>{certificate.issuer}</CertificateIssuer>
              <CertificateDetails>
                <span>{certificate.date}</span>
                <span>{certificate.duration}</span>
              </CertificateDetails>
            </CertificateContent>
            
            <ViewButton href={certificate.link} target="_blank">
              View <FaExternalLinkAlt size={14} />
            </ViewButton>
          </CertificateCard>
        ))}
      </CertificatesGrid>
    </CertificatesSection>
  )
}

const CertificatesSection = styled.section`
  padding: 80px 0;
`

const CertificatesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const CertificateCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 12px;
  padding: 24px;
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-left: 4px solid ${props => props.theme.primary};
`

const CertificateContent = styled.div`
  margin-bottom: 20px;
`

const CertificateTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 8px;
`

const CertificateIssuer = styled.p`
  font-weight: 500;
  color: ${props => props.theme.primary};
  margin-bottom: 16px;
`

const CertificateDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  align-self: flex-end;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.accent};
    color: white;
  }
`

export default Certificates