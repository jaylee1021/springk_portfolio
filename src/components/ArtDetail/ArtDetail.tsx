'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';

interface ArtDetailProps {
    title: string;
    category: string;
    image: string;
    size?: string;
    prevId?: number;
    nextId?: number;
}

export default function ArtDetail({ title, category, image, size, prevId, nextId }: ArtDetailProps) {
    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box sx={{ mb: 4 }}>
                <Button
                    component={Link}
                    href="/"
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        color: 'text.primary',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.05)'
                        }
                    }}
                >
                    Back to Art Work
                </Button>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
                alignItems: 'flex-start'
            }}>
                <Box sx={{ flex: '1 1 60%', width: '100%' }}>
                    <Box sx={{
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        backgroundColor: '#f5f5f5',
                        mb: 4
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

                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        {prevId ? (
                            <Button
                                component={Link}
                                href={`/artwork/${prevId}`}
                                startIcon={<ArrowBackIcon />}
                                color="inherit"
                            >
                                Previous
                            </Button>
                        ) : <Box />}

                        {nextId && (
                            <Button
                                component={Link}
                                href={`/artwork/${nextId}`}
                                endIcon={<ArrowForwardIcon />}
                                color="inherit"
                            >
                                Next
                            </Button>
                        )}
                    </Box>
                </Box>

                <Box sx={{ flex: '1 1 40%', width: '100%' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>

                    <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
                        {category}
                    </Typography>

                    {size && (
                        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 4, fontWeight: 'normal' }}>
                            {size}
                        </Typography>
                    )}

                    <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
                        {/* Future metadata can go here like year, dimensions, etc if available in data */}
                        <Typography variant="body1" color="text.secondary">
                            Spring days Original Artwork
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
