import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { East } from '@mui/icons-material';

const ServicesPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: "Waste Collection & Sorting",
      description: "A semi-mechanized sorting center ensures efficient separation of organic, plastic, and inert materials, diverting tons of waste from open dumping and landfills.",
      image: "src/assets/b1301743216ed33be27bb938b462159e.jpg",
      buttonText: "Find out more"
    },
    {
      title: "Biogas & Composting Solutions",
      description: "We design, operate, and manage waste-to-energy and composting platforms that supply renewable energy and eco-friendly fertilizers to households, farmers, and institutions.",
      image: "src/assets/5ca947983738ae108d9b537c352caa32.jpg",
      buttonText: "Find out more"
    },
    {
      title: "Community Awareness & Outreach",
      description: "From schools to marketplaces, we lead education campaigns on waste segregation, environmental health, and climate-smart practices. Our goal is to change mindsets and promote community ownership.",
      image: "src/assets/feeb75183886b4e710ea2990a3131b38.jpg",
      buttonText: "Find out more"
    },
    {
      title: "Plastic Recycling & Upcycling",
      description: "Our modern recycling workshop turns discarded plastics into valuable materials. We also support artisans and entrepreneurs in developing new plastic-based products.",
      image: "src/assets/86b859fb263bd11addd26e21e252864f.jpg",
      buttonText: "Find out more"
    },
    {
      title: "Training & Capacity Building",
      description: "We empower local communities especially women and youth through training in waste management, recycling techniques, and green entrepreneurship. Over 300 beneficiaries will gain skills to build sustainable livelihoods.",
      image: "src/assets/4251d625d62911d0328d5be1d2db90a4.jpg",
      buttonText: "Find out more"
    },
    {
      title: "Partnership & Advisory Support",
      description: "We collaborate with government institutions, NGOs, and private businesses to provide technical expertise, research opportunities, and co-managed solutions for sustainable waste management..",
      image: "src/assets/c38bde6cc39f14f5d0910bce154c323b.jpg",
      buttonText: "Find out more"
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#0a2e0a',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Comprehensive solutions tailored to Africa's unique challenges and opportunities
          </Typography>
        </Box>

        {/* Services Flex Container */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            overflowX: 'hidden'
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)', lg: '350px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                
               
              }}
            >
              {/* Service Image */}
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: 'cover'
                }}
              />

              {/* Service Content */}
              <CardContent sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                p: 4 
              }}>
                {/* Service Title */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#0a2e0a',
                    mb: 2
                  }}
                >
                  {service.title}
                </Typography>

                {/* Service Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: 3,
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </Typography>

                {/* Find out more Button */}
                <Button
                  variant="outlined"
                  endIcon={<East />}
                  sx={{
                    color: '#7fe261',
                    borderColor: '#7fe261',
                    fontWeight: '600',
                    textTransform: 'none',
                    alignSelf: 'flex-start',
                    px: 3,
                    '&:hover': {
                      backgroundColor: alpha('#7fe261', 0.08),
                      borderColor: '#6bd14a'
                    }
                  }}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPresentation;