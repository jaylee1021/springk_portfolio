'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtCard from '@/components/ArtCard/ArtCard';

import Link from 'next/link';
import { artworks } from '@/data/artworks';

import SplashScreen from '@/components/Splash/SplashScreen';

import { useSplash } from '@/context/SplashContext';

export default function HomeClient() {
    const { hasShownSplash, setHasShownSplash } = useSplash();

    if (!hasShownSplash) {
        return <SplashScreen onEnter={() => setHasShownSplash(true)} />;
    }

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Art Work
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {artworks.map((art) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={art.id}>
                        <Link href={`/artwork/${art.id}`} style={{ textDecoration: 'none' }}>
                            <ArtCard
                                title={art.title}
                                category={art.category}
                                image={art.image}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
