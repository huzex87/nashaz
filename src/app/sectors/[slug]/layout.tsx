import { Metadata } from "next";
import { sectors } from "@/lib/data/sectors";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const sector = sectors.find((s) => s.slug === params.slug);

    if (!sector) {
        return {
            title: "Sector Not Found | NAHSAZ Group",
        };
    }

    return {
        title: `${sector.title} Sector | NAHSAZ Group Portfolio`,
        description: sector.fullDescription || `Explore the NAHSAZ Group's operations and subsidiaries within the ${sector.title} sector.`,
        openGraph: {
            title: `${sector.title} Sector | NAHSAZ Group`,
            description: sector.fullDescription,
            url: `https://nahsazgroup.com/sectors/${params.slug}`,
            siteName: "NAHSAZ Group",
            images: [
                {
                    url: sector.subsidiaries[0]?.projects?.[0]?.image || '/images/default-og.png',
                    width: 1200,
                    height: 630,
                    alt: `${sector.title} Sector - NAHSAZ Group`,
                },
            ],
            type: 'website',
        },
    };
}

export default function SectorLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
