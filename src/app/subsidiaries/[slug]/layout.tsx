import { Metadata } from "next";
import { sectors } from "@/lib/data/sectors";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    let foundSubsidiary = null;
    let parentSector = null;

    for (const sector of sectors) {
        const sub = sector.subsidiaries.find((s) => s.slug === params.slug);
        if (sub) {
            foundSubsidiary = sub;
            parentSector = sector;
            break;
        }
    }

    if (!foundSubsidiary || !parentSector) {
        return {
            title: "Subsidiary Not Found | NAHSAZ Group",
        };
    }

    return {
        title: `${foundSubsidiary.name} | NAHSAZ Group Subsidiary`,
        description: foundSubsidiary.longDescription || foundSubsidiary.description,
        openGraph: {
            title: `${foundSubsidiary.name} - ${parentSector.title} | NAHSAZ Group`,
            description: foundSubsidiary.longDescription || foundSubsidiary.description,
            url: `https://nahsazgroup.com/subsidiaries/${params.slug}`,
            siteName: "NAHSAZ Group",
            images: [
                {
                    url: foundSubsidiary.projects?.[0]?.image || '/images/default-og.png',
                    width: 1200,
                    height: 630,
                    alt: `${foundSubsidiary.name} - NAHSAZ Group Subsidiary`,
                },
            ],
            type: 'website',
        },
    };
}

export default function SubsidiaryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
