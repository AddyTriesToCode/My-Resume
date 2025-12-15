import React from 'react'
import { Paper, Typography, Box, Card, CardContent, Button, Grid, Chip } from '@mui/material'
import { CardMembership, OpenInNew } from '@mui/icons-material'

function Certifications({ data }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <CardMembership sx={{ fontSize: 40, color: '#ff006e', mr: 2 }} />
        <Typography variant="h4" component="h2" sx={{ color: '#ff006e' }}>
          Certifications
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {data.map((cert) => (
          <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Card 
              elevation={2}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '4px solid #ff006e',
                border: '1px solid rgba(255, 0, 110, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ 
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: '#e0e0ff'
                }}>
                  {cert.name}
                </Typography>
                
                <Typography variant="body2" sx={{ 
                  color: '#ff006e', 
                  fontWeight: 600,
                  mb: 1 
                }}>
                  {cert.issuer}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#a0a0c0' }} gutterBottom>
                  Issued: {cert.date}
                </Typography>
                
                {cert.description && (
                  <Typography variant="body2" sx={{ color: '#a0a0c0' }} paragraph>
                    {cert.description}
                  </Typography>
                )}
                
                {cert.credentialId && (
                  <Chip 
                    label={`ID: ${cert.credentialId}`}
                    size="small"
                    sx={{ 
                      mt: 1,
                      bgcolor: 'rgba(255, 0, 110, 0.1)',
                      color: '#ff006e',
                      border: '1px solid rgba(255, 0, 110, 0.2)',
                      fontSize: '0.7rem'
                    }}
                  />
                )}
                
                {cert.link && (
                  <Button 
                    variant="contained" 
                    size="small"
                    endIcon={<OpenInNew />}
                    href={cert.link}
                    target="_blank"
                    sx={{
                      mt: 2,
                      bgcolor: '#ff006e',
                      color: '#fff',
                      '&:hover': {
                        bgcolor: '#ff1a7f',
                        boxShadow: '0 0 15px rgba(255, 0, 110, 0.4)'
                      }
                    }}
                  >
                    View Certificate
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Certifications
