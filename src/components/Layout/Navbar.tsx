'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typography from '@mui/material/Typography';

const pages = [
  { name: 'Art Work', path: '/' },
  { name: 'Characters', path: '/characters' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffe4e1' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: { xs: 1, md: 0 },
              alignItems: 'center',
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            <Typography variant="h4" noWrap component="div" sx={{ fontWeight: 400 }}>
              Spring days
            </Typography>
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
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button
              onClick={handleOpenNavMenu}
              sx={{ color: 'text.primary', minWidth: 'auto', p: 1 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
