import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { buttonHover } from '../../utils/animations.js'

const Footer = ({ openContactModal }) => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <SocialLinks>
            <SocialLink 
              href="https://github.com/Aslbek0730" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={buttonHover}
            >
              <FaGithub size={20} />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={buttonHover}
            >
              <FaLinkedinIn size={20} />
            </SocialLink>
            <SocialLink 
              href="mailto:aslbek@example.com"
              whileHover="hover"
              variants={buttonHover}
            >
              <FaEnvelope size={20} />
            </SocialLink>
          </SocialLinks>
          
          <ContactButton 
            onClick={openContactModal}
            whileHover="hover"
            variants={buttonHover}
          >
            Contact Me
          </ContactButton>
        </FooterTop>
        
        <FooterDivider />
        
        <FooterBottom>
          <Copyright>
            © {currentYear} Akhmedov Aslbek. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.backgroundSecondary};
  padding: 60px 0 30px;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  box-shadow: ${props => props.theme.cardShadow};
  transition: background-color 0.2s ease, color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`

const ContactButton = styled(motion.button)`
  padding: 10px 24px;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.accent};
  }
`

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${props => props.theme.border};
  margin-bottom: 20px;
`

const FooterBottom = styled.div`
  text-align: center;
`

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};
`

export default Footer