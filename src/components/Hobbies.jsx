import React from 'react'
import { Paper, Typography, Box, Card, CardContent, Grid } from '@mui/material'
import { Favorite } from '@mui/icons-material'

function Hobbies({ data }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Favorite sx={{ fontSize: 40, color: '#4ecdc4', mr: 2 }} />
        <Typography variant="h4" component="h2" sx={{ color: '#4ecdc4' }}>
          Hobbies & Interests
        </Typography>
      </Box>
      
      <Grid container spacing={2}>
        {data.map((hobby) => (
          <Grid item xs={6} sm={4} md={3} key={hobby.id}>
            <Card 
              elevation={1}
              sx={{ 
                textAlign: 'center',
                borderTop: '3px solid #4ecdc4',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)'
                }
              }}
            >
              <CardContent>
                <Typography variant="h3" component="div" sx={{ mb: 1.5 }}>
                  {hobby.icon}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom sx={{ 
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#e0e0ff'
                }}>
                  {hobby.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#a0a0c0' }}>
                  {hobby.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Hobbies
