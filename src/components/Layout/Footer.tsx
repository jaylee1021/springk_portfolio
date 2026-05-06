'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image';

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
    <Box component="footer" sx={{ backgroundImage: 'url(/background.png)', py: 6, mt: 'auto', backgroundPosition: 'center' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src="/spring_days_title.png" alt="Spring days" width={301} height={50} />
        </Box>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Link href="mailto:izziccobom@gmail.com">izziccobom@gmail.com</Link>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
