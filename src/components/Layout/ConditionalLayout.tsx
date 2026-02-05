'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHideRequested = pathname === '/contact';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isHideRequested && <Navbar />}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {!isHideRequested && <Footer />}
    </Box>
  );
}