'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtCard from '@/components/ArtCard/ArtCard';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

// Placeholder data
const artworks = [
  { id: 1, title: 'Summer Breeze', category: 'Oil on Canvas', image: 'https://res.cloudinary.com/itcpc-home/image/upload/v1701587809/itcpc-banner/jf0p7ra7nlfg1dokc3if.jpg' },
  { id: 2, title: 'Urban Solitude', category: 'Acrylic', image: 'https://source.unsplash.com/random/800x800?art,city' },
  { id: 3, title: 'Mountain Echo', category: 'Watercolor', image: 'https://source.unsplash.com/random/800x800?nature,mountain' },
  { id: 4, title: 'Abstract Dreams', category: 'Mixed Media', image: 'https://source.unsplash.com/random/800x800?abstract' },
  { id: 5, title: 'Floral Symphony', category: 'Oil on Canvas', image: 'https://source.unsplash.com/random/800x800?flowers' },
  { id: 6, title: 'Ocean Whisper', category: 'Watercolor', image: 'https://source.unsplash.com/random/800x800?ocean' },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

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
        {artworks.map((art) => {
           const imgSrc = art.id === 1 ? art.image : `https://placehold.co/600x600?text=${encodeURIComponent(art.title)}`;
           
           return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={art.id}>
              <ArtCard 
                title={art.title} 
                category={art.category}
                image={imgSrc}
                onClick={() => handleImageClick(imgSrc)}
              />
            </Grid>
          );
        })}
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
