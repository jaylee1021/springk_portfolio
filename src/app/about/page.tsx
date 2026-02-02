
import type { Metadata } from 'next';
import AboutClient from '@/components/About/AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SpringK (Saebom Kim) and the story behind the art - a journey of sincerity, recovery, and healing.',
  openGraph: {
    title: 'About | Spring Days',
    description: 'Learn about SpringK (Saebom Kim) and the story behind the art - a journey of sincerity, recovery, and healing.',
  },
};

export default function About() {
  return <AboutClient />;
}
