import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';

const ProductSpecifications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const specifications = [
    {
      name: "Waste Collection & Sorting",
      value: "A semi-mechanized sorting center ensures efficient separation of organic, plastic, and inert materials, diverting tons of waste from open dumping and landfills."
    },
    {
      name: "Biogas & Composting Solutions",
      value: "We design, operate, and manage waste-to-energy and composting platforms that supply renewable energy and eco-friendly fertilizers to households, farmers, and institutions."
    },
    {
      name: "Community Awareness & Outreach",
      value: 'From schools to marketplaces, we lead education campaigns on waste segregation, environmental health, and climate-smart practices. Our goal is to change mindsets and promote community ownership.'
    },
    {
      name: "Plastic Recycling & Upcycling",
      value: "Our modern recycling workshop turns discarded plastics into valuable materials. We also support artisans and entrepreneurs in developing new plastic-based products."
    },
    {
      name: "Training & Capacity Building",
      value: "We empower local communities especially women and youth through training in waste management, recycling techniques, and green entrepreneurship. Over 300 beneficiaries will gain skills to build sustainable livelihoods."
    },
    {
      name: "Partnership & Advisory Support",
      value: "We collaborate with government institutions, NGOs, and private businesses to provide technical expertise, research opportunities, and co-managed solutions for sustainable waste management.."
    }
  ];

  

 

  return (
    <Box sx={{ backgroundColor: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  color: 'green',
                  mb: 3
                }}
              >
                Our Servcies
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4
                }}
              >
                The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. 
                The powder coated steel divider separates active cards from new ones, or can be used 
                to archive important task lists.
              </Typography>

              <Grid container spacing={4}>
                {specifications.map((spec, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        borderTop: 1,
                        borderColor: 'divider',
                        pt: 3
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          fontWeight: 'bold',
                          color: 'green',
                          mb: 1
                        }}
                      >
                        {spec.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                          color: 'text.secondary',
                          mt: 1
                        }}
                      >
                        {spec.value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductSpecifications;