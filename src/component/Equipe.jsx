import { Height } from '@mui/icons-material';
import { Box, Typography, List, ListItem,Avatar} from '@mui/material';

const people = [
  {
    name: 'Jonathan Zwannah Elsar Sr',
    role: 'Chairman board of Directors',
    description1: 'Jonathan Zwannah Elsar Sr holds an Associate Degree in School Administration from the LICOSESS Mobile Teaching Training College, and a BS.c in Accounting from the University of Liberia ,.',
    description2:'Founder and CEO of the Universal Standard School of Health Sciences at the Fish Market, Sinkor. He has over 20 years of experience in Administration.',
    description3:'A well-seasoned administrator, educator, and accountant.',
    imageUrl:
      'assets/WhatsApp Image 2025-09-06 à 09.07.51_48b1f69c.jpg',
  },
  {
    name: 'Oscar Bush Seth',
    role: 'Co-chairman board of directors',
    description1:'Mr. Seth is a seasoned professional in Insurance and Risk Management, with extensive expertise in Compliance and Claims. As a strategic leader, he currently holds the position of Managing Director and CEO at Excellent Insurance Brokerage LLC.',
    imageUrl:
      'assets/WhatsApp Image 2025-09-06 à 09.09.44_20ee9fd8.jpg',
  },

  {
    name: 'Gami Bi Ta Innocent',
    role: 'Environmental Engineer | Waste Valorization & Sustainable Technologie. ',
    description1:'Gami Bi Ta Innocent holds a Bachelor’s in Earth Sciences and a Master’s in Geomaterials and Habitat Technology from the Université Félix Houphoüt Boigny de Cocody, Abidjan. Furthermore, he holds a Master in Process and Bioprocess Engineering from the Université Sorbonne Paris Nord, and another Master in Waste Valorisation from the Institute National Polytechnique Houphoüt Boigny in Yamoussoukro.',
    description2:'Passionate about sustainability and innovation, Innocent brings his expertise to transform waste into valuable resources and drive green solutions for a better future at GreenCycle Liberia, INC.',
    imageUrl:
      'assets/WhatsApp Image 2025-09-06 à 09.10.10_48056e95.jpg',
  },

  {
    name: 'Mr. Roland Yengbeh Jr',
    role: 'Field Manager ',
    description1:'Passionate about environmental science from an early age, Mr. Roland Yengbeh Jr formalized that calling into a focused academic path at the Tubman National Institute of Medical Arts (TNIMA), where he earned a diploma in Environmental Health.',
    description2:'During his time at TNIMA, he gained invaluable real-world experience through internships at notable institutions such as the Monrovia Free Port of Liberia and the National Public Health Institute of Liberia (NPHIL). These placements deepened his resolve to work in environmental chemistry and toxicology, reinforcing both his academic and professional aspirations.Passionate about sustainability and innovation, Innocent brings his expertise to transform waste into valuable resources and drive green solutions for a better future at GreenCycle Liberia, INC.',
    descriptyion3:'Transitioning seamlessly from education into practice, he began his career as a classroom teacher at Joseph Dweh Doeyan Academy (JDDA), where he did not only share knowledge but also inspired young minds. Subsequently, he expanded his impact by joining Mobile Waste Solution as a sales agent, promoting responsible waste management through the Mobile Waste Solution App—bridging environmental education with community engagement and technological innovation.',
    imageUrl:
      'assets/WhatsApp Image 2025-09-06 à 09.11.33_2696b6a2.jpg',
  },

  
  // More people...
];

export default function LeadershipTeam() {
  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa', 
      py: { xs: 6, sm: 8 },
      px: 2 
    }}>
      <Box sx={{
        maxWidth: '1200px', // équivalent à max-w-7xl
        mx: 'auto',
        display: 'grid',
        gap: 5,
        px: { xs: 3, lg: 4 },
        gridTemplateColumns: { xl: '1fr 2fr' }
      }}>
        <Box sx={{ maxWidth: 'xl' }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              letterSpacing: '-0.025em',
              color: 'text.primary',
              mb: 3,
              fontWeight: 'bold',
              color: '#0c0c0cff',
              background: 'linear-gradient(90deg, #1a7e1aff,#1a7e1aff)',
              backgroundClip:'text',
              WebkitTextFillColor:'transparent',
              textAlign:'center'
            }}
          >
           Meet our team.
          </Typography>
          <Typography 
            variant="body1"
            align='center'
            sx={{ 
              color: 'text.secondary',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              mt: 3
            }}
          >
         Our dedicated team at GreenCycle Liberia INC. 
         brings passion, innovation, and expertise to
          drive sustainable solutions for a greener future. 
          </Typography>
        </Box>
        
        <List 
          sx={{
            display: 'grid',
            gap: { xs: 3, sm: 4 },
            gridTemplateColumns: { sm: 'repeat(2, 1fr)' },
            p: 0
          }}
        >
          {people.map((person) => (
            <ListItem key={person.name} sx={{ p: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center',flexDirection:'column', gap: 3 ,mb:5}}>
               <Avatar 
                  alt={person.name} 
                  src={person.imageUrl} 
                  sx={{ width: 200, height: 200 }} 
                />
            
                <Box>
                 <Box>
                  <Typography 
                    variant="h5" 
                    component="h2"
                    align='center'
                    sx={{ 
                      fontWeight: 600,
                      letterSpacing: '-0.025em',
                      color: 'green'
                    }}
                  >
                    {person.name}
                  </Typography>
                  <Typography 
                    variant="h5"
                    align='center'
                    sx={{ 
                      fontWeight: 600,
                      color: 'green'
                    }}
                  >
                    {person.role}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.secondary'
                    }}
                  >
                    {person.description1}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.secondary'
                    }}
                  >
                    {person.description2}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.secondary'
                    }}
                  >
                    {person.description3}
                  </Typography>
                 </Box>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      
    </Box>
  );
}