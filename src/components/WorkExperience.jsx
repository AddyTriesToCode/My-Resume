import React from 'react'
import { Paper, Typography, Box, Chip, List, ListItem, ListItemText } from '@mui/material'
import { Work } from '@mui/icons-material'

function WorkExperience({ data }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Work sx={{ fontSize: 40, color: '#ff006e', mr: 2 }} />
        <Typography variant="h4" component="h2" sx={{ color: '#ff006e' }}>
          Work Experience
        </Typography>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          pb: 2,
          pt: 2,
          px: 1,
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            bgcolor: 'rgba(255, 0, 110, 0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: '#ff006e',
            borderRadius: '4px',
            '&:hover': {
              bgcolor: '#d9005c',
            },
          },
        }}
      >
        {data.map((work) => (
          <Box 
            key={work.id} 
            sx={{ 
              p: 3,
              minWidth: '450px',
              maxWidth: '450px',
              flexShrink: 0,
              bgcolor: 'rgba(255, 0, 110, 0.05)',
              borderRadius: 2,
              borderLeft: '4px solid #ff006e',
              border: '1px solid rgba(255, 0, 110, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)'
              }
            }}
          >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: '#e0e0ff' }}>
                {work.position}
              </Typography>
              <Typography variant="body1" sx={{ color: '#a0a0c0' }}>
                {work.company} • {work.location}
              </Typography>
            </Box>
            <Chip 
              label={work.duration} 
              sx={{ 
                bgcolor: 'rgba(255, 0, 110, 0.2)',
                color: '#ff006e',
                fontWeight: 500,
                border: '1px solid rgba(255, 0, 110, 0.3)',
                alignSelf: 'flex-start'
              }}
              size="small"
            />
          </Box>
          
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#a0a0c0', mb: 2 }}>
            {work.description}
          </Typography>
          
          {work.responsibilities && work.responsibilities.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#ff006e' }} gutterBottom>
                Key Responsibilities & Achievements:
              </Typography>
              <List dense>
                {work.responsibilities.map((resp, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary={`• ${resp}`}
                      primaryTypographyProps={{ sx: { color: '#a0a0c0' } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
          
          {work.technologies && work.technologies.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#ff006e' }} gutterBottom>
                Technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {work.technologies.map((tech, index) => (
                  <Chip 
                    key={index} 
                    label={tech} 
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255, 0, 110, 0.1)',
                      color: '#ff006e',
                      border: '1px solid rgba(255, 0, 110, 0.3)'
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      ))}
      </Box>
    </Paper>
  )
}

export default WorkExperience
