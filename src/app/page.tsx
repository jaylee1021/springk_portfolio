
import type { Metadata } from 'next';
import HomeClient from '@/components/Home/HomeClient';

export const metadata: Metadata = {
  title: 'Spring Days',
  description: 'Explore the diverse collection of artworks by SpringK, featuring themes of emotions, recovery, and bright colors.',
  openGraph: {
    title: 'Spring Days',
    description: 'Explore the diverse collection of artworks by SpringK, featuring themes of emotions, recovery, and bright colors.',
  },
};

export default function Home() {
  return <HomeClient />;
}
