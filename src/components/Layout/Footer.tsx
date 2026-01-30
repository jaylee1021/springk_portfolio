'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Spring days
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    // <Box component="footer" sx={{ backgroundImage: '#faa9ccff', py: 6, mt: 'auto' }}>
    <Box component="footer" sx={{ backgroundImage: 'url(/background.png)', py: 6, mt: 'auto', backgroundPosition: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Spring days
        </Typography>
        <Typography
          variant="subtitle1" 
          align="center"
          color="text.secondary"
          component="p"
        >
          Capturing moments in colors.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
