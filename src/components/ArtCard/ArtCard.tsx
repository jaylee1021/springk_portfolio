'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface ArtCardProps {
  title: string;
  image: string;
  category: string;
  onClick?: () => void;
}

export default function ArtCard({ title, image, category, onClick }: ArtCardProps) {
  return (
    <Card sx={{ maxWidth: '100%', height: '100%', borderRadius: 0, boxShadow: 0, bgcolor: 'transparent' }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="div"
          sx={{
            pt: '100%', // Square aspect ratio
            backgroundColor: 'grey.200',
            position: 'relative',
          }}
          image={image}
        />
        <CardContent sx={{ px: 0 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
