import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Characters() {
    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Characters
                </Typography>
            </Box>
        </Container>
    );
}