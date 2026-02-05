'use client';

import React, { useState } from 'react';
import { 
  Container, Typography, Box, TextField, Button, 
  Stack, Snackbar, CircularProgress, Alert, Divider, Paper, MenuItem 
} from '@mui/material';

// Define the subjects to keep the code clean
const SUBJECT_OPTIONS = [
  { value: 'app_issue', label: 'Report an Issue / Bug' },
  { value: 'app_feedback', label: 'App Feedback / Suggestion' },
  { value: 'art_inquiry', label: 'Art Commission / Inquiry' },
  { value: 'general', label: 'General Question' },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: 'app_issue', // Default to an app-related subject for Apple Review
    message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (formData.name && formData.email && formData.message) {
      setLoading(true);
      
      // Use dynamic import to avoid the localstorage evaluation error in dev
      const emailjs = (await import('@emailjs/browser')).default;
      
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: SUBJECT_OPTIONS.find(opt => opt.value === formData.subject)?.label,
        message: formData.message,
        to_name: 'SpringK',
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setOpen(true);
        setFormData({ name: '', email: '', subject: 'app_issue', message: '' });
        setSubmitted(false);
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        App Support & Contact
      </Typography>
      
      <Paper variant="outlined" sx={{ p: 3, mb: 6, bgcolor: 'grey.50' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Quick iMessage Support:
        </Typography>
        <Typography variant="body2">
          1. Open iMessage & tap the <strong>+</strong> or App icon.<br />
          2. Find our sticker icon in the drawer.<br />
          3. Tap to send, or drag and drop onto chat bubbles!
        </Typography>
      </Paper>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            error={submitted && !formData.name}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={submitted && !formData.email}
          />

          {/* New Subject Dropdown */}
          <TextField
            select
            label="Reason for Contact"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
          >
            {SUBJECT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
            error={submitted && !formData.message}
          />
          <Button type="submit" variant="contained" size="large" sx={{ py: 1.5, bgcolor: 'black' }} disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
          </Button>
        </Stack>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Message sent! We&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
}