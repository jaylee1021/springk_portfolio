'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (formData.name && formData.email && formData.message) {
      setLoading(true);
      
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''; 
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'SpringK', 
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        console.log('Email sent successfully');
        setOpen(true);
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again or email directly.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Contact
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Interested in purchasing a piece or commissioning a new work? Get in touch.
      </Typography>
      
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Stack spacing={3}>
          <TextField 
            error={submitted && formData.name === ''}
            helperText={submitted && formData.name === '' ? 'Name is required' : ''}
            label="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth 
            required 
          />
          <TextField 
          error={submitted && formData.email === ''}
            helperText={submitted && formData.email === '' ? 'Email is required' : ''}
            label="Email" 
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            fullWidth 
            required 
          />
          <TextField 
            error={submitted && formData.message === ''}
            helperText={submitted && formData.message === '' ? 'Message is required' : ''}
            label="Message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline 
            rows={4} 
            fullWidth 
            required 
          />
          <Button type="submit" variant="contained" size="large" sx={{ py: 1.5 }} disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
          </Button>
        </Stack>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message sent! We&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
}
