import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../context/ThemeContext.jsx'

export const GlobalStyles = () => {
  const { theme } = useTheme()
  
  const GlobalStylesComponent = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: ${theme.background};
      color: ${theme.text};
      transition: background-color 0.3s ease, color 0.3s ease;
      line-height: 1.5;
      min-height: 100vh;
    }
    
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    section {
      padding: 80px 0;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 0.5em;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
    }
    
    h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      height: 3px;
      width: 40px;
      background-color: ${theme.primary};
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    a {
      color: ${theme.primary};
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    a:hover {
      color: ${theme.accent};
    }
    
    button {
      cursor: pointer;
      font-family: 'Inter', sans-serif;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-title h2 {
      display: inline-block;
    }
    
    .section-title h2::after {
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
    }

    @media (max-width: 768px) {
      section {
        padding: 60px 0;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1.5rem;
      }
    }

    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `
  
  return <GlobalStylesComponent />
}