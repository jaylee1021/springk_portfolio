'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        About SpringK
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" paragraph>
          SpringK is an artist dedicated to capturing the subtle interplay of light and emotion.
          With a focus on oil and watercolor, her work explores themes of nature, urban solitude, and abstract dreams.
        </Typography>
        <Typography variant="body1">
          (This is a placeholder for the artist biography.)
        </Typography>
      </Box>
    </Container>
  );
}
