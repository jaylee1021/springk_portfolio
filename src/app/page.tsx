'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtCard from '@/components/ArtCard/ArtCard';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { artworks } from '@/data/artworks';

import SplashScreen from '@/components/Splash/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  if (showSplash) {
    return <SplashScreen onEnter={() => setShowSplash(false)} />;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Gallery
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          A collection of recent works exploring color, light, and emotion.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {artworks.map((art) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={art.id}>
              <ArtCard 
                title={art.title} 
                category={art.category}
                image={art.image}
                onClick={() => handleImageClick(art.image)}
              />
            </Grid>
        ))}
      </Grid>

      <Dialog 
        open={Boolean(selectedImage)} 
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          style: { backgroundColor: 'transparent', boxShadow: 'none' }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }} onClick={handleClose}>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Art Preview" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '90vh', 
                display: 'block', 
                margin: 'auto',
                cursor: 'pointer'
              }} 
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
