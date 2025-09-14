import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FeaturesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(12, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const ImageContainer = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  overflow: 'hidden',
});

const MobileContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 400,
  background: '#1a1a1a',
  borderRadius: 24,
  padding: 8,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: 160,
    height: 320,
  },
}));

const MobileScreen = styled(Box)({
  width: '100%',
  height: '100%',
  borderRadius: 16,
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const CodeEditor = styled(Box)({
  background: '#1a1a1a',
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  width: '100%',
});

const EditorTabs = styled(Box)({
  background: '#1a1a1a',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
});

const EditorTab = styled(Box)(({ active }) => ({
  padding: '8px 16px',
  fontSize: '0.75rem',
  color: active ? 'white' : '#888',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  background: active ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
  borderBottom: active ? '2px solid #1976d2' : 'none',
}));

const EditorContent = styled(Box)({
  padding: 24,
  minHeight: 200,
  background: '#1a1a1a',
  color: '#888',
  fontFamily: 'Courier New, monospace',
  fontSize: '0.75rem',
  '& .keyword': { color: '#64b5f6' },
  '& .import': { color: '#a5d6a7' },
  '& .function': { color: '#ffb74d' },
  '& .variable': { color: '#f48fb1' },
  '& .return': { color: '#ce93d8' },
});

export default function BentoFeatures() {
  return (
    <FeaturesContainer>
      <Container maxWidth="xl">
        {/* En-tête */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1,
              mb: 2,
              fontSize: '0.875rem',
            }}
          >
            Deploy faster
          </Typography>
          
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '2.5rem', sm: '3rem', lg: '3.5rem' },
              lineHeight: 1.2,
              maxWidth: 512,
              mx: 'auto',
              letterSpacing: '-0.025em',
              color: 'text.primary',
            }}
          >
            Everything you need to deploy your app
          </Typography>
        </Box>

        {/* Grille des fonctionnalités */}
        <Grid container spacing={2}>
          {/* Mobile Friendly - Prend 2 lignes sur desktop */}
          <Grid item xs={12} lg={4}>
            <StyledCard sx={{ minHeight: { lg: 600 } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    letterSpacing: '-0.025em',
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Mobile friendly
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    mb: 3,
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </Typography>
              </CardContent>
              
              <ImageContainer>
                <MobileContainer>
                  <MobileScreen>
                    <img
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      alt="Mobile friendly interface"
                    />
                  </MobileScreen>
                </MobileContainer>
              </ImageContainer>
            </StyledCard>
          </Grid>

          {/* Colonne du milieu */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              {/* Performance */}
              <Grid item xs={12}>
                <StyledCard sx={{ minHeight: { lg: 290 } }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                        letterSpacing: '-0.025em',
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Performance
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                    </Typography>
                  </CardContent>
                  
                  <ImageContainer>
                    <img
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                      alt="Performance metrics"
                      style={{ maxWidth: '280px', width: '100%' }}
                    />
                  </ImageContainer>
                </StyledCard>
              </Grid>

              {/* Security */}
              <Grid item xs={12}>
                <StyledCard sx={{ minHeight: { lg: 290 } }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                        letterSpacing: '-0.025em',
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Security
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                    </Typography>
                  </CardContent>
                  
                  <ImageContainer>
                    <img
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                      alt="Security features"
                      style={{ height: 152, maxHeight: '40%', objectFit: 'cover', width: '100%' }}
                    />
                  </ImageContainer>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>

          {/* Powerful APIs - Prend 2 lignes sur desktop */}
          <Grid item xs={12} lg={4}>
            <StyledCard sx={{ minHeight: { lg: 600 } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    letterSpacing: '-0.025em',
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Powerful APIs
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    mb: 3,
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </Typography>
              </CardContent>
              
              <ImageContainer>
                <CodeEditor>
                  <EditorTabs>
                    <EditorTab active>NotificationSetting.jsx</EditorTab>
                    <EditorTab>App.jsx</EditorTab>
                  </EditorTabs>
                  <EditorContent>
                    <div className="keyword">// Your powerful API integration</div>
                    <div className="import">import &#123; useNotifications &#125; from './hooks';</div>
                    <div className="function">export default function Settings() &#123;</div>
                    <div style={{ marginLeft: 20 }} className="variable">const &#123; data &#125; = useNotifications();</div>
                    <div style={{ marginLeft: 20 }} className="return">return (&lt;div&gt;...&lt;/div&gt;);</div>
                    <div className="function">&#125;</div>
                  </EditorContent>
                </CodeEditor>
              </ImageContainer>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </FeaturesContainer>
  );
}