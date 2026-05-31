import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akshay V T - Freelance Web Developer',
    short_name: 'Akshay VT',
    description: 'Freelance web developer specializing in React & Next.js. 6+ years experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#06070a',
    theme_color: '#06070a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
