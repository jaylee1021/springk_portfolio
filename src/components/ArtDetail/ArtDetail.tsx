'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ArtDetailProps {
    title: string;
    category: string;
    image: string;
}

export default function ArtDetail({ title, category, image }: ArtDetailProps) {
    const router = useRouter();

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box sx={{ mb: 4 }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.back()}
                    sx={{
                        color: 'text.primary',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.05)'
                        }
                    }}
                >
                    Back to Gallery
                </Button>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
                alignItems: 'flex-start'
            }}>
                <Box sx={{
                    flex: '1 1 60%',
                    width: '100%',
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                }}>
                    <Image
                        src={image}
                        alt={title}
                        width={1200}
                        height={900}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'contain',
                            maxHeight: '80vh'
                        }}
                        priority
                    />
                </Box>

                <Box sx={{ flex: '1 1 40%', width: '100%' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>

                    <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
                        {category}
                    </Typography>

                    <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
                        {/* Future metadata can go here like year, dimensions, etc if available in data */}
                        <Typography variant="body1" color="text.secondary">
                            SpringK Original Artwork
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
