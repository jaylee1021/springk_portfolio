
import { MetadataRoute } from 'next';
import { artworks } from '@/data/artworks';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.spring-k.com';

    const artworkEntries: MetadataRoute.Sitemap = artworks.map((art) => ({
        url: `${baseUrl}/artwork/${art.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...artworkEntries,
    ];
}
