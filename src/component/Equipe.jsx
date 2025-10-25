import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Button,
  Collapse,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  KeyboardArrowLeft, 
  KeyboardArrowRight,
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const people = [
  {
    name: 'Charles Favor Elsar, Jr.',
    role: 'Founder & Chief Executive Officer – GreenCycle Liberia, INC',
    description1: 'Charles Favor Elsar, Jr. is a passionate environmental innovator, engineer, and visionary leader committed to driving sustainable transformation across Liberia and the African continent. He holds a Bachelor of Science in Mining and Geology from the Institut National Polytechnique Félix Houphouët-Boigny (INP-HB), Côte d’Ivoire, an MSc in Waste Management Engineering from the Centre d’Excellence Africain pour la Valorisation des Produits à Haute Valeur Ajoutée (CEA-ValoPro) of Institut National Polytechnique Félix Houphouët-Boigny (INP-HB), Côte d’Ivoire, and an MSc in Process and Bioprocess Engineering from the Université Sorbonne Paris Nord, France.',
    description2:'He also holds professional certifications in Environmental Law and Protection and Environmental Technology from the Institut de la Francophonie pour le Développement Durable (IFDD) / Université Senghor, as well as in Environmental Law and Legal Compliance, strengthening his expertise in environmental policy, compliance, and sustainable development. In addition, he is a certified French speaker, making him bilingual and fluent in both English and French, which enhances his ability to collaborate effectively across diverse international and multicultural environments. ',
    description3:'Professionally, he has accumulated diverse experiences in the environmental and industrial sectors. He previously worked with Dr SETT Sénégal, a waste management company specialized in waste treatment and valorization, where he served as an Environmental Engineer and QHSE Manager, overseeing environmental compliance, quality assurance, and health and safety management. He also worked with Bureau Veritas Liberia, gaining valuable experience in environmental quality control, mining operations, and laboratory analysis.',
    imageUrl: '/assets/WhatsApp Image 2025-09-01 à 03.04.40_b2928c6b.jpg',
  },
  {
    name: 'Ashall David Whei.',
    role: 'Co-Founder & Technical Director – GreenCycle Liberia, INC',
    description1: 'Ashall David Whei is a dedicated chemical engineer, innovator, and environmental enthusiast with a strong passion for sustainable development and technological advancement. As Co-Founder and Technical Director of GreenCycle Liberia, INC, he plays a key role in designing, optimizing, and overseeing the company’s waste-to-value processes, ensuring that every innovation meets the highest standards of efficiency, safety, and environmental sustainability.',
    description2:'Ashall holds a Bachelor of Science in Chemical Engineering and a Master of Science in Analytical Chemistry, both from the Institut National Polytechnique Félix Houphouët-Boigny (INP-HB), Côte d’Ivoire. His strong background in chemical process design, analytical techniques, and environmental chemistry enables him to develop practical and scalable solutions for recycling, composting, and clean energy production. ',
    description3:'He also holds several professional certificates in Environmental Science, including Environmental Technology from the Institut de la Francophonie pour le Développement Durable (IFDD) / Université Senghor. His multidisciplinary training combines scientific expertise with a deep commitment to sustainable innovation. Fluent in both English and French, and a certified French speaker, Ashall brings bilingual excellence to GreenCycle Liberia’s collaborations with regional and international partners. His technical leadership and dedication to environmental responsibility continue to drive the company’s mission of transforming waste into valuable resources and building a greener, cleaner, and more resilient Liberia.',
    imageUrl: '/assets/WhatsApp Image 2025-10-09 à 15.57.10_4d6fd79e.jpg',
  },
  {
    name: 'Jonathan Zwannah Elsar Sr',
    role: 'Chairman board of Directors',
    description1: 'Jonathan Zwannah Elsar Sr holds an Associate Degree in School Administration from the LICOSESS Mobile Teaching Training College, and a BS.c in Accounting from the University of Liberia ,.',
    description2:'Founder and CEO of the Universal Standard School of Health Sciences at the Fish Market, Sinkor. He has over 20 years of experience in Administration.',
    description3:'A well-seasoned administrator, educator, and accountant.',
    imageUrl: '/assets/WhatsApp Image 2025-09-06 à 09.07.51_48b1f69c.jpg',
  },
  {
    name: 'Oscar Bush Seth',
    role: 'Co-chairman board of directors',
    description1:'Mr. Seth is a seasoned professional in Insurance and Risk Management, with extensive expertise in Compliance and Claims. As a strategic leader, he currently holds the position of Managing Director and CEO at Excellent Insurance Brokerage LLC.',
    imageUrl: '/assets/WhatsApp Image 2025-09-06 à 09.09.44_20ee9fd8.jpg',
  },
  {
    name: 'Gami Bi Ta Innocent',
    role: 'Environmental Engineer | Waste Valorization & Sustainable Technologie.',
    description1: "Gami Bi Ta Innocent holds a Bachelor's in Earth Sciences and a Master's in Geomaterials and Habitat Technology from the Université Félix Houphoüt Boigny de Cocody, Abidjan. Furthermore, he holds a Master in Process and Bioprocess Engineering from the Université Sorbonne Paris Nord, and another Master in Waste Valorisation from the Institute National Polytechnique Houphoüt Boigny in Yamoussoukro.",
    description2:'Passionate about sustainability and innovation, Innocent brings his expertise to transform waste into valuable resources and drive green solutions for a better future at GreenCycle Liberia, INC.',
    imageUrl: '/assets/WhatsApp Image 2025-09-06 à 09.10.10_48056e95.jpg',
  },
  {
    name: 'Mr. Roland Yengbeh Jr',
    role: 'Field Manager',
    description1:'Passionate about environmental science from an early age, Mr. Roland Yengbeh Jr formalized that calling into a focused academic path at the Tubman National Institute of Medical Arts (TNIMA), where he earned a diploma in Environmental Health.',
    description2:'During his time at TNIMA, he gained invaluable real-world experience through internships at notable institutions such as the Monrovia Free Port of Liberia and the National Public Health Institute of Liberia (NPHIL). These placements deepened his resolve to work in environmental chemistry and toxicology, reinforcing both his academic and professional aspirations.Passionate about sustainability and innovation, Innocent brings his expertise to transform waste into valuable resources and drive green solutions for a better future at GreenCycle Liberia, INC.',
    description3:'Transitioning seamlessly from education into practice, he began his career as a classroom teacher at Joseph Dweh Doeyan Academy (JDDA), where he did not only share knowledge but also inspired young minds. Subsequently, he expanded his impact by joining Mobile Waste Solution as a sales agent, promoting responsible waste management through the Mobile Waste Solution App—bridging environmental education with community engagement and technological innovation.',
    imageUrl: '/assets/WhatsApp Image 2025-09-06 à 09.11.33_2696b6a2.jpg',
  },
];

export default function LeadershipTeam() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(people.map(() => false));

  // Toujours 2 membres par slide (50% de largeur chacun)
  const membersPerSlide = 2;
  const totalSlides = Math.ceil(people.length / membersPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  // Obtenir les membres pour le slide actuel
  const getCurrentSlideMembers = () => {
    const startIndex = currentSlide * membersPerSlide;
    return people.slice(startIndex, startIndex + membersPerSlide);
  };

  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa', 
      py: { xs: 6, sm: 8 },
      px: 2 
    }}>
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 3, lg: 4 },
      }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 'bold',
              color: '#0c0c0cff',
              background: 'linear-gradient(90deg, #1a7e1aff,#1a7e1aff)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Meet our team
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
            Our dedicated team at GreenCycle Liberia INC. brings passion, innovation, and expertise to drive sustainable solutions for a greener future.
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', maxWidth: '1200px', mx: 'auto' }}>
          
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <IconButton
                onClick={prevSlide}
                sx={{
                  position: 'absolute',
                  left: { xs: -10, md: -20 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white'
                  },
                  zIndex: 10
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <IconButton
                onClick={nextSlide}
                sx={{
                  position: 'absolute',
                  right: { xs: -10, md: -20 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white'
                  },
                  zIndex: 10
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </>
          )}

          {/* Team Members Container */}
          <Box sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <Box
                  key={slideIndex}
                  sx={{
                    width: `${100 / totalSlides}%`,
                    display: 'flex',
                    gap: 3,
                    px: 2
                  }}
                >
                  {people
                    .slice(slideIndex * membersPerSlide, slideIndex * membersPerSlide + membersPerSlide)
                    .map((person, index) => {
                      const globalIndex = slideIndex * membersPerSlide + index;
                      return (
                        <Box
                          key={globalIndex}
                          sx={{
                            width: '50%', // Chaque membre prend 50% de largeur
                            flexShrink: 0
                          }}
                        >
                          <Card
                            sx={{
                              borderRadius: 4,
                              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                              overflow: 'hidden',
                              transition: 'all 0.3s ease-in-out',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              '&:hover': {
                                boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                                transform: 'translateY(-4px)'
                              }
                            }}
                          >
                            <CardContent sx={{ 
                              p: { xs: 3, md: 4 },
                              flexGrow: 1,
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              {/* Avatar and Basic Info */}
                              <Box sx={{ 
                                display: 'flex', 
                                flexDirection:  'column' ,
                                alignItems: 'center',
                                gap: 3,
                                mb: 3,
                                textAlign: isMobile ? 'center' : 'left'
                              }}>
                                <Avatar 
                                  alt={person.name} 
                                  src={person.imageUrl} 
                                  sx={{ 
                                    width: { xs: 100, md: 120 }, 
                                    height: { xs: 100, md: 120 },
                                    border: '1px solid green',
                                    flexShrink: 0
                                  }} 
                                />
                                
                                <Box sx={{ flex: 1 }}>
                                  <Typography 
                                    variant="h5" 
                                    component="h3"
                                    sx={{ 
                                      fontWeight: 'bold',
                                      color: 'green',
                                      mb: 1,
                                      fontSize: { xs: '1.1rem', md: '1.3rem' }
                                    }}
                                  >
                                    {person.name}
                                  </Typography>
                                  
                                  <Typography 
                                    variant="body1"
                                    sx={{ 
                                      color: 'text.secondary',
                                      fontWeight: '500',
                                      mb: 2,
                                      fontSize: { xs: '0.9rem', md: '1rem' }
                                    }}
                                  >
                                    {person.role}
                                  </Typography>

                                  {/* Expand/Collapse Button */}
                                  <Button
                                    onClick={() => toggleExpand(globalIndex)}
                                    endIcon={expanded[globalIndex] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                    sx={{
                                      color: 'green',
                                      fontWeight: '600',
                                      textTransform: 'none',
                                      fontSize: '0.9rem'
                                    }}
                                  >
                                    {expanded[globalIndex] ? 'Show Less' : 'Read Bio'}
                                  </Button>
                                </Box>
                              </Box>

                              {/* Expandable Description */}
                              <Collapse in={expanded[globalIndex]} timeout="auto">
                                <Box sx={{ 
                                  borderTop: `1px solid ${theme.palette.divider}`,
                                  pt: 3 
                                }}>
                                  {person.description1 && (
                                    <Typography 
                                      variant="body2"
                                      sx={{ 
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        mb: 2,
                                        textAlign:'justify'
                                      }}
                                    >
                                      {person.description1}
                                    </Typography>
                                  )}
                                  
                                  {person.description2 && (
                                    <Typography 
                                      variant="body2"
                                      sx={{ 
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        mb: 2,
                                        textAlign:'justify'
                                      }}
                                    >
                                      {person.description2}
                                    </Typography>
                                  )}
                                  
                                  {person.description3 && (
                                    <Typography 
                                      variant="body2"
                                      sx={{ 
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        textAlign:'justify'
                                      }}
                                    >
                                      {person.description3}
                                    </Typography>
                                  )}
                                </Box>
                              </Collapse>
                            </CardContent>
                          </Card>
                        </Box>
                      );
                    })}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: currentSlide === index ? 'primary.main' : 'grey.300',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: currentSlide === index ? 'primary.main' : 'grey.400',
                    }
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}