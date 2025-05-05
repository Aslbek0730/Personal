import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useTheme } from '../../context/ThemeContext.jsx'

const Navbar = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Languages', href: '#languages' },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <NavbarContainer 
      isScrolled={isScrolled}
      style={{ 
        backgroundColor: isScrolled ? theme.navbarBackground : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <NavbarContent>
        <LogoContainer>
          <Logo href="#home">AA</Logo>
          <LogoText>Axmedov Aslbek</LogoText>
        </LogoContainer>

        <DesktopMenu>
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </DesktopMenu>

        <NavbarControls>
          <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
          </ThemeToggleButton>
          
          <ResumeButton 
            href="/src/assets/cv.pdf" 
            download="Aslbek_Axmedov_CV.pdf"
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement('a');
              link.href = '/src/assets/cv.pdf';
              link.download = 'Aslbek_Axmedov_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
          </ResumeButton>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        </NavbarControls>
      </NavbarContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuContainer
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <MobileNavLink 
                key={link.name} 
                href={link.href}
                onClick={toggleMobileMenu}
              >
                {link.name}
              </MobileNavLink>
            ))}
          </MobileMenuContainer>
        )}
      </AnimatePresence>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  height: 64px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  padding: 5px 10px;
  border: 2px solid ${props => props.theme.primary};
  margin-right: 12px;
`

const LogoText = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  display: none;
  
  @media (min-width: 768px) {
    display: inline-block;
  }
`

const DesktopMenu = styled.div`
  display: none;
  gap: 24px;
  
  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled.a`
  color: ${props => props.theme.text};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const NavbarControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const ResumeButton = styled.a`
  padding: 8px 16px;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.accent};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  display: flex;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  overflow: hidden;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavLink = styled.a`
  padding: 16px 24px;
  color: ${props => props.theme.text};
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.border};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`

export default Navbar