export interface NewsItem {
    id: string;
    title: string;
    description: string;
    date: string;
    sector: string;
    category: "Announcement" | "Insight" | "Milestone";
    image: string;
    slug: string;
}

export const news: NewsItem[] = [
    {
        id: "1",
        title: "NAHSAZ Group Expands Sustainable Housing Initiative",
        description: "A major step towards eco-friendly residential infrastructure in Abuja's newest satellite city.",
        date: "Feb 24, 2026",
        sector: "Real Estate",
        category: "Milestone",
        image: "/images/platinum_heights_1772059769112.png",
        slug: "sustainable-housing-expansion"
    },
    {
        id: "2",
        title: "The Future of Mechanized Farming in Northern Nigeria",
        description: "How precision agriculture is transforming crop yields for our GreenField Agro subsidiary.",
        date: "Feb 20, 2026",
        sector: "Agriculture",
        category: "Insight",
        image: "/images/agtech_hub_1772059769112.png",
        slug: "future-of-mechanized-farming"
    },
    {
        id: "3",
        title: "NAHSAZ Medical Diagnostics Achieves ISO Certification",
        description: "Setting a new gold standard for medical testing accuracy and patient care in West Africa.",
        date: "Feb 15, 2026",
        sector: "Healthcare",
        category: "Announcement",
        image: "/images/diagnostic_hub_1772059769112.png",
        slug: "iso-certification-achievement"
    },
    {
        id: "4",
        title: "Renewable Energy: Powering Industrial Growth",
        description: "Scaling off-grid solar solutions to meet the energy demands of Nigerian small-scale industries.",
        date: "Feb 10, 2026",
        sector: "Energy",
        category: "Insight",
        image: "/images/kano_solar_1772059769112.png",
        slug: "renewable-energy-industrial-growth"
    }
];
