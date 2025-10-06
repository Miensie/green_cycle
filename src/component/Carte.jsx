import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Card, 
  CardContent, 
  useTheme,
  alpha
} from '@mui/material';
import { 
  LocationOn, 
  Language, 
  Flag 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom styling with green-black gradient
const GradientCard = styled(Card)(({ theme }) => ({
  maxWidth: 1000,
  margin: 'auto',
  marginTop: theme.spacing(4),
  background: `linear-gradient(135deg, ${alpha('#ebefecff', 0.9)} 0%, ${alpha('#666c65ff', 0.9)} 100%)`,
  color: '#fff',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: 400,
  width: '100%',
  overflow: 'hidden',
  borderRadius: '5px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  border: `1px solid ${alpha('#fff', 0.1)}`
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: alpha('#1e211fff', 0.2),
  marginRight: theme.spacing(1.5)
}));

const MonroviaLocation = () => {
  const theme = useTheme();
  
  // Monrovia coordinates
  const monroviaCoords = {
    lat: 6.2907,
    lng: -10.7605
  };
  
  // Google Maps iframe URL centered on Monrovia
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1016288.0521658036!2d-10.7605!3d6.2907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1684362543295!5m2!1sen!2sus`;
  
  return (
    <GradientCard sx={{width:'100%'}}>
      <CardContent sx={{ padding: theme.spacing(0) }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' } 
        }}>
          {/* Map on the left */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' }, 
            padding: theme.spacing(3) 
          }}>
            <Box display="flex" alignItems="center" mb={2}>
              <IconWrapper>
                <LocationOn sx={{ fontSize: 24, color: '#edededff' }} />
              </IconWrapper>
              <Typography variant="h4" component="h1" sx={{ 
                fontWeight: 600,
                background: 'linear-gradient(45deg, #101210ff 30%, #a5d6a7 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Monrovia, Liberia
              </Typography>
            </Box>
            
            <StyledPaper elevation={0}>
              <iframe
                title="Map of Monrovia, Liberia"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </StyledPaper>
          </Box>
          
          {/* Information on the right */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            padding: theme.spacing(3),
            backgroundColor: alpha('#000', 0.3),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: { md: `1px solid ${alpha('#4caf50', 0.3)}` }
          }}>
            <Box>
              <Box display="flex" alignItems="center" mb={3}>
                <IconWrapper>
                  <Flag sx={{ fontSize: 20, color: '#4caf50' }} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" sx={{ color: '#4caf50', fontWeight: 600 }}>
                    Liberia's Capital City
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mt: 0.5 }}>
                    Historic city founded in 1822
                  </Typography>
                </Box>
              </Box>
              
              <Box display="flex" alignItems="center" mb={3}>
                <IconWrapper>
                  <Language sx={{ fontSize: 20, color: '#4caf50' }} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" sx={{ color: '#4caf50', fontWeight: 600, mb: 0.5 }}>
                    Geographic Coordinates
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff' }}>
                    {monroviaCoords.lat}°N, {monroviaCoords.lng}°W
                  </Typography>
                </Box>
              </Box>
              
              <Box display="flex" alignItems="center" mb={3}>
                <IconWrapper>
                  <LocationOn sx={{ fontSize: 20, color: '#4caf50' }} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" sx={{ color: '#4caf50', fontWeight: 600, mb: 0.5 }}>
                    Key Facts
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    • Population: Approximately 1.5 million<br/>
                    • Official Language: English<br/>
                    • Time Zone: GMT (UTC+0)<br/>
                    • Currency: Liberian Dollar (LRD)
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ 
              padding: theme.spacing(2),
              backgroundColor: alpha('#000', 0.2),
              borderRadius: '8px',
              borderLeft: `4px solid ${alpha('#4caf50', 0.5)}`
            }}>
              <Typography variant="body2" sx={{ 
                color: alpha('#fff', 0.9),
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}>
                "Monrovia is the capital and largest city of Liberia. 
                Founded in 1822, it was named after U.S. President James Monroe. 
                The city is located on Cape Mesurado along the Atlantic Ocean 
                and serves as the country's economic, financial, and cultural center. 
                Monrovia is also home to the Liberian National Museum and the Waterside Market."
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </GradientCard>
  );
};

export default MonroviaLocation;