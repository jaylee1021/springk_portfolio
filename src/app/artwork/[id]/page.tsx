import * as React from 'react';
import { artworks } from '@/data/artworks';
import ArtDetail from '@/components/ArtDetail/ArtDetail';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';

// Helper to find artwork by ID
// Note: IDs in data are numbers, but params.id will be string
const getArtwork = (id: string) => {
    const artworkId = parseInt(id, 10);
    return artworks.find(art => art.id === artworkId);
};

export function generateStaticParams() {
    return artworks.map((art) => ({
        id: art.id.toString(),
    }));
}

export default async function ArtworkPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const artwork = getArtwork(id);

    if (!artwork) {
        return (
            <Container maxWidth="xl" sx={{ py: 20, textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    Artwork Not Found
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    The artwork you are looking for does not exist or has been removed.
                </Typography>
                <Button
                    component={Link}
                    href="/"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Back to Art work
                </Button>
            </Container>
        );
    }

    return (
        <ArtDetail
            title={artwork.title}
            category={artwork.category}
            image={artwork.image}
            size={artwork.size}
        />
    );
}
