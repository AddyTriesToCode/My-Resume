import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Container, Box } from '@mui/material'
import LiquidEther from './components/LiquidEther'
import Header from './components/Header'
import Education from './components/Education'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Hobbies from './components/Hobbies'
import resumeData from './data/resumeData'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff', // Neon cyan/blue
      light: '#33e0ff',
      dark: '#0099cc',
    },
    secondary: {
      main: '#ff006e', // Neon pink
      light: '#ff1a7f',
      dark: '#cc0055',
    },
    background: {
      default: '#000000',
      paper: '#0d1024',
    },
    text: {
      primary: '#e0e0ff',
      secondary: '#a0a0c0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.15)',
          backgroundImage: 'none',
          border: '1px solid rgba(0, 212, 255, 0.25)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.12)',
          backgroundImage: 'none',
          border: '1px solid rgba(0, 212, 255, 0.25)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
          backdropFilter: 'blur(12px)',
        },
      },
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: '#000000',
        py: 4,
        position: 'relative',
        overflow: 'hidden',
      }}>
        

        {/* Liquid Ether Background */}
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}>
          <LiquidEther
            colors={['#5227FF', '#00d4ff', '#00ff88']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            style={{ height: '100vh' }}
          />
        </Box>
          <Container maxWidth="lg">
          <Header data={resumeData.personal} />
          
          <Box sx={{ mt: 4 }}>
            <Education data={resumeData.education} />
            <Skills data={resumeData.skills} />
            <WorkExperience data={resumeData.workExperience} />
            <Projects data={resumeData.projects} />
            <Certifications data={resumeData.certifications} />
            <Hobbies data={resumeData.hobbies} />
          </Box>
          
          
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
