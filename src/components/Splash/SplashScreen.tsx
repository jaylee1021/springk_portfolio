'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Fade from '@mui/material/Fade';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [visible, setVisible] = React.useState(true);

  const handleClick = () => {
    setVisible(false);
    setTimeout(onEnter, 500);
  };

  return (
    <Fade in={visible} timeout={500}>
      <Box
        onClick={handleClick}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          cursor: 'pointer',
        }}
      >
        <Image
          src="/spring_days_logo.png"
          alt="SpringK Portfolio"
          width={400}
          height={400}
          sizes="100vw"
          priority
          style={{ objectFit: 'contain', padding: '20px' }}
        />
      </Box>
    </Fade>
  );
}
