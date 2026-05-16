'use client';

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
    title2?: string;
    title3?: string;
    category: string;
    image: string;
    size?: string;
    title_image: string;
    description_kr_one: string;
    description_kr_two?: string;
    description_en_one: string;
    description_en_two?: string;
    prevId?: number;
    nextId?: number;
}

export default function ArtDetail({
    title,
    title2,
    title3,
    category,
    image,
    size,
    title_image,
    description_kr_one,
    description_kr_two,
    description_en_one,
    description_en_two,
    prevId,
    nextId }: ArtDetailProps) {
    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mb: 4 }}>
                <Box>
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
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
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

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 6 },
                alignItems: 'flex-start'
            }}>
                <Box sx={{ flex: '1 1 60%', width: '100%' }}>
                    <Box sx={{
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        backgroundColor: '#f5f5f5'
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
                </Box>

                <Box sx={{ flex: '1 1 40%', width: '100%' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', md: '2rem' } }}>
                        <Box component="span" sx={{ display: 'inline-flex', marginLeft: '-10px', position: 'relative', top: '0px', width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}>
                            <Image src={title_image} alt={title} width={60} height={60} style={{ width: '100%', height: '100%' }} />
                        </Box>
                        {title}
                        {title2 &&
                            <>
                                <Box component="span" sx={{ display: 'inline-flex', position: 'relative', top: '0px', width: { xs: 22, md: 30 }, height: { xs: 22, md: 30 } }}>
                                    <Image src={title2} alt={title} width={30} height={30} style={{ width: '100%', height: '100%' }} />
                                </Box>
                                {title3 && title3}
                            </>
                        }
                    </Typography>

                    <Typography variant="h1"
                        color="text.secondary"
                        gutterBottom
                        sx={{
                            fontSize: '0.8rem',
                            mb: 2
                        }}>
                        {category}<br />
                        {size}
                    </Typography>

                    <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                fontSize: '0.85rem',
                                textAlign: 'justify',
                                textJustify: 'inter-word'
                            }}
                        >
                            {description_kr_one}
                            {description_kr_two && <><br /><br />{description_kr_two}</>}
                            <br />
                            <br />
                            {description_en_one}
                            {description_en_two && <><br /><br />{description_en_two}</>}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
