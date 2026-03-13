import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Characters | Spring Days',
    description: 'Character designs and illustrations',
};

const characters = [
    { src: '/characters/1.png', hoverSrc: '/characters/1_1.png', alt: 'Character 1' },
    { src: '/characters/line.png', alt: 'Line' },
    { src: '/characters/2.png', alt: 'Character 2' },
    { src: '/characters/3.png', alt: 'Character 3' },
    { src: '/characters/4.png', alt: 'Character 4' },
];

export default function Characters() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(/characters_background.png)',
                backgroundPosition: 'center',
                py: 8
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '200px' }}>
                        <Image
                            src="/characters/characters_title.png"
                            alt="Characters"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                    {characters.map((char, index) => (
                        <Box key={index} sx={{ width: '100%', maxWidth: '800px' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease-in-out',
                                        '& .hover-image': {
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-8px)'
                                        },
                                        '&:hover .hover-image': {
                                            opacity: 1
                                        }
                                    }}
                                >
                                    <Image
                                        src={char.src}
                                        alt={char.alt}
                                        width={800}
                                        height={1200}
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                    {char.hoverSrc && (
                                        <Image
                                            src={char.hoverSrc}
                                            alt={`${char.alt} Hover`}
                                            fill
                                            className="hover-image"
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        />
                                    )}
                                </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}