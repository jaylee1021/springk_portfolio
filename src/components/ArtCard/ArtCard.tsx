'use client';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface ArtCardProps {
  title: string;
  title2?: string;
  title3?: string;
  image: string;
  title_image: string;
  category: string;
  onClick?: () => void;
}

export default function ArtCard({ title, title2, title3, image, title_image, category, onClick }: ArtCardProps) {
  return (
    <Card sx={{ maxWidth: '100%', height: '100%', borderRadius: 0, boxShadow: 0, bgcolor: 'transparent' }}>
      <CardActionArea
        onClick={onClick}
        sx={{
          '& .MuiCardActionArea-focusHighlight': {
            background: 'transparent',
          },
          '&:hover .MuiCardContent-root': {
            backgroundColor: '#fcd1d8ff',
          }
        }}
      >
        <Box sx={{ position: 'relative', pt: '100%', backgroundColor: 'grey.200' }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <CardContent sx={{ px: 1, transition: 'background-color 0.3s ease' }}>
          <Typography gutterBottom variant="h6" component="div">
            <Box component="span" sx={{ display: 'inline-flex', position: 'relative', top: '8px' }}>
              <Image src={title_image} alt={title} width={30} height={30} />
            </Box>
            {title}
            {title2 &&
              <>
                <Box component="span" sx={{ marginLeft: '-5px', display: 'inline-flex', position: 'relative', top: '5px' }}>
                  <Image src={title2} alt={title} width={20} height={20} />
                </Box>
                {title3 && title3}
              </>
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
