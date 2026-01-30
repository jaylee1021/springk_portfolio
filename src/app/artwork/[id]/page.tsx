import * as React from 'react';
import { artworks } from '@/data/artworks';
import ArtDetail from '@/components/ArtDetail/ArtDetail';
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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const artwork = getArtwork(id);

    if (!artwork) {
        return {
            title: 'Artwork Not Found',
        };
    }

    return {
        title: artwork.title,
        description: `View ${artwork.title}, a ${artwork.category} artwork by SpringK.`,
        openGraph: {
            title: `${artwork.title} | Spring Days`,
            description: `View ${artwork.title}, a ${artwork.category} artwork by SpringK.`,
            images: [
                {
                    url: artwork.image,
                    width: 800,
                    height: 600,
                    alt: artwork.title,
                },
            ],
        },
    };
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

    const currentIndex = artworks.findIndex(art => art.id === artwork.id);
    const prevArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
    const nextArtwork = currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

    return (
        <ArtDetail
            title={artwork.title}
            category={artwork.category}
            image={artwork.image}
            size={artwork.size}
            prevId={prevArtwork?.id}
            nextId={nextArtwork?.id}
        />
    );
}
