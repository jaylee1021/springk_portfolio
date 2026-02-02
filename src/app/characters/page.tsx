
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Characters | Spring Days',
    description: 'Character designs and illustrations',
};

export default function Characters() {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#ffe4e1', py: 8 }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h1" component="h1" gutterBottom>
                        Characters
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}