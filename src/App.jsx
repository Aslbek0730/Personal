import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './context/ThemeContext.jsx'
import Navbar from './components/layout/Navbar.jsx'
import HeroSection from './components/layout/HeroSection.jsx'
import Education from './components/sections/Education.jsx'
import Portfolio from './components/sections/Portfolio.jsx'
import Skills from './components/sections/Skills.jsx'
import SoftSkills from './components/sections/SoftSkills.jsx'
import Certificates from './components/sections/Certificates.jsx'
import Languages from './components/sections/Languages.jsx'
import Footer from './components/layout/Footer.jsx'
import ContactModal from './components/ui/ContactModal.jsx'

function App() {
  const { theme } = useTheme()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="app"
      style={{ 
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <Education />
        <Portfolio />
        <Skills />
        <SoftSkills />
        <Certificates />
        <Languages />
      </main>
      <Footer openContactModal={openContactModal} />
      {isContactModalOpen && <ContactModal closeModal={closeContactModal} />}
    </motion.div>
  )
}

export default App