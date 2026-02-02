'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Fade from '@mui/material/Fade';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 400);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    setVisible(false);
    setTimeout(onEnter, 500);
  };

  return (
    <Fade in={visible} timeout={500}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: isMobile ? 'background.default' : '#faecf2ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <Image
          onClick={handleClick}
          src="/spring_days_logo.png"
          alt="Spring days"
          width={500}
          height={500}
          sizes="100vw"
          priority
          style={{ objectFit: 'contain', padding: '20px', cursor: 'pointer' }}
        />
      </Box>
    </Fade>
  );
}
