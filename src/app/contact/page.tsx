'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Contact
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Interested in purchasing a piece or commissioning a new work? Get in touch.
      </Typography>
      
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
        <Stack spacing={3}>
          <TextField label="Name" fullWidth required />
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Message" multiline rows={4} fullWidth required />
          <Button variant="contained" size="large" sx={{ py: 1.5 }}>
            Send Message
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
