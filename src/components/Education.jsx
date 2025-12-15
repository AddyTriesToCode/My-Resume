import React, { useMemo, useState } from 'react'
import { Paper, Typography, Box, Chip, List, ListItem, ListItemText, IconButton, Stack } from '@mui/material'
import { School, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { keyframes } from '@mui/system'

function Education({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('next')

  const slideInLeft = useMemo(
    () => keyframes`
      from { opacity: 0; transform: translateX(-24px); }
      to { opacity: 1; transform: translateX(0); }
    `,
    []
  )

  const slideInRight = useMemo(
    () => keyframes`
      from { opacity: 0; transform: translateX(24px); }
      to { opacity: 1; transform: translateX(0); }
    `,
    []
  )

  const total = Array.isArray(data) ? data.length : 0
  const current = total > 0 ? data[activeIndex] : null
  const handleNext = () => {
    if (!data || total === 0) return
    if (activeIndex >= total - 1) return
    setDirection('next')
    setActiveIndex((prev) => Math.min(prev + 1, total - 1))
  }

  const handlePrev = () => {
    if (!data || total === 0) return
    if (activeIndex <= 0) return
    setDirection('prev')
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const cardAnimation = direction === 'next' ? slideInRight : slideInLeft

  return (
    <Paper elevation={3} sx={{ p: 4, mb: 3, borderRadius: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <School sx={{ fontSize: 40, color: '#00d4ff' }} />
          <Typography variant="h4" component="h2" sx={{ color: '#00d4ff' }}>
            Education
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            onClick={handlePrev} 
            aria-label="Previous education" 
            disabled={activeIndex === 0 || total <= 1}
            sx={{ color: '#00d4ff', opacity: activeIndex === 0 || total <= 1 ? 0.4 : 1 }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <IconButton 
            onClick={handleNext} 
            aria-label="Next education" 
            disabled={activeIndex >= total - 1 || total <= 1}
            sx={{ color: '#00d4ff', opacity: activeIndex >= total - 1 || total <= 1 ? 0.4 : 1 }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      {current ? (
        <Box 
          key={current.id}
          sx={{ 
            p: 3, 
            mb: 2,
            bgcolor: 'rgba(0, 212, 255, 0.05)',
            borderRadius: 2,
            borderLeft: '4px solid #00d4ff',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            animation: `${cardAnimation} 400ms ease`,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 1 }}>
            <Typography variant="h6" component="h3" sx={{ flex: 1, fontWeight: 600, color: '#e0e0ff' }}>
              {current.degree}
            </Typography>
            <Chip 
              label={current.duration} 
              sx={{ 
                bgcolor: 'rgba(0, 212, 255, 0.2)',
                color: '#00d4ff',
                fontWeight: 500,
                border: '1px solid rgba(0, 212, 255, 0.3)'
              }}
              size="small"
            />
          </Box>
          
          <Typography variant="body1" sx={{ color: '#a0a0c0' }} gutterBottom>
            {current.institution} • {current.location}
          </Typography>
          
          {current.cgpa && (
            <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, color: '#00d4ff' }}>
             {(activeIndex==0?"CGPA":"Percentage")}: {current.cgpa}/{current.maxCgpa}
            </Typography>
          )}
          
          {current.achievements && current.achievements.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#00d4ff' }} gutterBottom>
                Achievements:
              </Typography>
              <List dense>
                {current.achievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary={`• ${achievement}`}
                      primaryTypographyProps={{ sx: { color: '#a0a0c0' } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
          
          {current.coursework && current.coursework.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#00d4ff' }} gutterBottom>
                {activeIndex >= 1 ? 'Board' : 'Relevant Coursework'}:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {current.coursework.map((course, index) => (
                  <Chip 
                    key={index} 
                    label={course} 
                    size="small"
                    sx={{
                      bgcolor: 'rgba(0, 212, 255, 0.1)',
                      color: '#00d4ff',
                      border: '1px solid rgba(0, 212, 255, 0.3)'
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <Typography sx={{ color: '#a0a0c0' }}>No education entries available.</Typography>
      )}
    </Paper>
  )
}

export default Education
