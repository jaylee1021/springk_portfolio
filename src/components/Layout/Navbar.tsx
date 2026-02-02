'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';
import { useSplash } from '@/context/SplashContext';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Art Work', path: '/' },
  { name: 'Characters', path: '/characters' },
  { name: 'About', path: '/about' },
  // { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { setHasShownSplash } = useSplash();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogoClick = () => {
    setHasShownSplash(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffd8e9' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component={Link}
            href="/"
            onClick={handleLogoClick}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: { xs: 1, md: 0 },
              alignItems: 'center',
            }}
          >
            <Image src="/spring_days_title.png" alt="Spring days" width={301} height={50} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, ml: 'auto' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.path}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  fontWeight: pathname === page.path ? 700 : 400,
                  borderBottom: pathname === page.path ? '2px solid black' : 'none',
                  borderRadius: 0,
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              component={Link}
              href="https://www.instagram.com/hispring_k"
              target="_blank"
              sx={{
                my: 2,
                color: 'text.primary',
                display: 'block',
              }}
            >
              <InstagramIcon />
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.path}>
                  <Typography textAlign="center" sx={{ fontWeight: pathname === page.path ? 700 : 400 }}>{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu} component={Link} href="https://www.instagram.com/hispring_k" target="_blank">
                <InstagramIcon sx={{ mr: 1 }} />
                <Typography textAlign="center" sx={{ fontWeight: 400 }}>Instagram</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
