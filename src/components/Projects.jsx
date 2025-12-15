import React from 'react'
import { Paper, Typography, Box, Chip, Card, CardContent, Button, List, ListItem, ListItemText } from '@mui/material'
import { Rocket, GitHub, OpenInNew } from '@mui/icons-material'

function Projects({ data }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Rocket sx={{ fontSize: 40, color: '#00d4ff', mr: 2 }} />
        <Typography variant="h4" component="h2" sx={{ color: '#00d4ff' }}>
          Projects
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
            bgcolor: 'rgba(0, 212, 255, 0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: '#00d4ff',
            borderRadius: '4px',
            '&:hover': {
              bgcolor: '#00b8d4',
            },
          },
        }}
      >
        {data.map((project) => (
          <Card 
            key={project.id}
            elevation={2}
            sx={{ 
              minWidth: '400px',
              maxWidth: '400px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              borderTop: '4px solid #00d4ff',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
              }
            }}
          >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: '#e0e0ff', mb: 2 }}>
                  {project.name}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#a0a0c0' }} paragraph>
                  {project.description}
                </Typography>
                
                {project.features && project.features.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: '#00d4ff' }} gutterBottom>
                      Key Features:
                    </Typography>
                    <List dense>
                      {project.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0, pl: 0 }}>
                          <ListItemText 
                            primary={`• ${feature}`}
                            primaryTypographyProps={{ variant: 'body2', sx: { color: '#a0a0c0' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.technologies.map((tech, index) => (
                        <Chip 
                          key={index} 
                          label={tech} 
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 212, 255, 0.1)',
                            color: '#00d4ff',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
                
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  {project.github && (
                    <Button 
                      variant="contained" 
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        bgcolor: '#00d4ff',
                        color: '#0a0e27',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: '#33e0ff',
                          boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
                        }
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      variant="outlined" 
                      size="small"
                      startIcon={<OpenInNew />}
                      href={project.demo}
                      target="_blank"
                      sx={{
                        color: '#00d4ff',
                        borderColor: '#00d4ff',
                        '&:hover': {
                          bgcolor: 'rgba(0, 212, 255, 0.1)',
                          borderColor: '#33e0ff'
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
        ))}
      </Box>
    </Paper>
  )
}

export default Projects
