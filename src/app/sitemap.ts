import { MetadataRoute } from 'next';
import { sectors } from "@/lib/data/sectors";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nashazgroup.com';

    // Static Pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/insights',
        '/careers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Sector Pages
    const sectorPages = sectors.map((sector) => ({
        url: `${baseUrl}/sectors/${sector.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Dynamic Subsidiary Pages
    const subsidiaryPages = sectors.flatMap((sector) =>
        sector.subsidiaries.map((sub) => ({
            url: `${baseUrl}/subsidiaries/${sub.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    );

    return [...staticPages, ...sectorPages, ...subsidiaryPages];
}
