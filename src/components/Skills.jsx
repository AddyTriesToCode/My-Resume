import React from 'react'
import { Paper, Typography, Box, Chip, Grid } from '@mui/material'
import { Code, Language, Psychology, Storage, Build, Cloud, People } from '@mui/icons-material'

function Skills({ data }) {
  const skillCategories = [
    { name: 'Programming Languages', key: 'programming', icon: <Code /> },
    { name: 'Web Development', key: 'webDevelopment', icon: <Language /> },
    { name: 'AI/ML', key: 'aiml', icon: <Psychology /> },
    { name: 'Databases', key: 'databases', icon: <Storage /> },
    { name: 'Tools & Technologies', key: 'tools', icon: <Build /> },
    { name: 'Cloud Platforms', key: 'cloud', icon: <Cloud /> },
    { name: 'Soft Skills', key: 'softSkills', icon: <People /> }
  ]

  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Code sx={{ fontSize: 40, color: '#00d4ff', mr: 2 }} />
        <Typography variant="h4" component="h2" sx={{ color: '#00d4ff' }}>
          Skills
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {skillCategories.map((category) => (
          data[category.key] && data[category.key].length > 0 && (
            <Grid item xs={12} sm={6} md={4} key={category.key}>
              <Box sx={{ 
                p: 2.5, 
                bgcolor: 'rgba(0, 212, 255, 0.05)',
                borderRadius: 2,
                borderTop: '3px solid #00d4ff',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                height: '100%'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: '#00d4ff', mr: 1 }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontSize: '1.1rem', color: '#e0e0ff' }}>
                    {category.name}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {data[category.key].map((skill, index) => (
                    <Chip 
                      key={index} 
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(0, 212, 255, 0.2)',
                        color: '#00d4ff',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: 'rgba(0, 212, 255, 0.3)',
                          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
                        },
                        transition: 'all 0.2s'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          )
        ))}
      </Grid>
    </Paper>
  )
}

export default Skills
