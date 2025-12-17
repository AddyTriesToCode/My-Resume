import React from 'react'
import { Paper, Typography, Box, Chip, IconButton } from '@mui/material'
import { Email, Phone, LocationOn, LinkedIn, GitHub, Download } from '@mui/icons-material'

function Header({ data }) {
  return (
    <Paper 
      elevation={8}
      sx={{
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        color: '#e0e0ff',
        p: { xs: 3, md: 6 },
        borderRadius: 3,
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom sx={{ 
        fontWeight: 700,
        fontSize: { xs: '2rem', md: '3rem' },
        background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em',
      }}>
        {data.name}
      </Typography>
      
      <Typography variant="h5" gutterBottom sx={{ 
        opacity: 0.95,
        fontSize: { xs: '1.2rem', md: '1.5rem' },
        color: '#00d4ff',
        textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
      }}>
        {data.title}
      </Typography>
      
      <Typography variant="body1" sx={{ 
        mt: 2, 
        mb: 4, 
        opacity: 0.85,
        maxWidth: 700,
        mx: 'auto',
        lineHeight: 1.6,
        color: '#a0a0c0',
      }}>
        {data.summary}
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: 2,
        mb: 3 
      }}>
        <Chip 
          icon={<Email />} 
          label={data.email}
          component="a"
          href={`mailto:${data.email}`}
          clickable
          sx={{ 
            bgcolor: 'rgba(0, 212, 255, 0.15)',
            color: '#00d4ff',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            '&:hover': { 
              bgcolor: 'rgba(0, 212, 255, 0.25)',
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
            }
          }}
        />
        <Chip 
          icon={<Phone />} 
          label={data.phone}
          sx={{ 
            bgcolor: 'rgba(0, 212, 255, 0.15)',
            color: '#00d4ff',
            border: '1px solid rgba(0, 212, 255, 0.3)',
          }}
        />
        <Chip 
          icon={<LocationOn />} 
          label={data.location}
          sx={{ 
            bgcolor: 'rgba(0, 212, 255, 0.15)',
            color: '#00d4ff',
            border: '1px solid rgba(0, 212, 255, 0.3)',
          }}
        />
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        {data.linkedin && (
          <IconButton 
            component="a" 
            href={data.linkedin} 
            target="_blank"
            sx={{ 
              color: '#00d4ff',
              bgcolor: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              '&:hover': { 
                bgcolor: 'rgba(0, 212, 255, 0.2)',
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
              }
            }}
          >
            <LinkedIn />
          </IconButton>
        )}
        {data.github && (
          <IconButton 
            component="a" 
            href={data.github} 
            target="_blank"
            sx={{ 
              color: '#00d4ff',
              bgcolor: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              '&:hover': { 
                bgcolor: 'rgba(0, 212, 255, 0.2)',
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
              }
            }}
          >
            <GitHub />
          </IconButton>
        )}
        {data.resume && (
          <IconButton 
            component="a" 
            href={data.resume}
            download
            sx={{ 
              color: '#00d4ff',
              bgcolor: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              '&:hover': { 
                bgcolor: 'rgba(0, 212, 255, 0.2)',
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
              }
            }}
          >
            <Download />
          </IconButton>
        )}
      </Box>
    </Paper>
  )
}

export default Header
