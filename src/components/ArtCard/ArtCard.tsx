'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
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
        <Box sx={{ position: 'relative', pt: '100%', backgroundColor: 'grey.200' }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
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
