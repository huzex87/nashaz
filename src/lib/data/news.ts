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
        title: "NAHSAZ Group Spearheads $500M Sustainable Housing Initiative",
        description: "Launching the 'Platinum Heights' eco-city, a benchmark for carbon-neutral residential infrastructure in Sub-Saharan Africa.",
        date: "Feb 28, 2026",
        sector: "Real Estate",
        category: "Milestone",
        image: "/images/platinum_heights_1772059769112.png",
        slug: "sustainable-housing-expansion"
    },
    {
        id: "2",
        title: "The Industrial Impact of Precision Agriculture in Nigeria",
        description: "How our 'GreenField Agro' subsidiary is leveraging AI and satellite data to increase northern crop yields by 40%.",
        date: "Feb 25, 2026",
        sector: "Agriculture",
        category: "Insight",
        image: "/images/agtech_hub_1772059769112.png",
        slug: "future-of-mechanized-farming"
    },
    {
        id: "3",
        title: "NAHSAZ Medical Diagnostics Achieves Gold Standard ISO 15189",
        description: "Our regional diagnostic hubs are now officially certified for international clinical laboratory standards, a first for the private sector.",
        date: "Feb 18, 2026",
        sector: "Healthcare",
        category: "Announcement",
        image: "/images/diagnostic_hub_1772059769112.png",
        slug: "iso-certification-achievement"
    },
    {
        id: "4",
        title: "Empowering Rural Nigeria: The Kano Solar Mandate",
        description: "Solara Renewables completes Phase I of the 50MW off-grid solar array, providing base-load power to 15,000 SMEs.",
        date: "Feb 12, 2026",
        sector: "Energy",
        category: "Insight",
        image: "/images/kano_solar_1772059769112.png",
        slug: "renewable-energy-industrial-growth"
    },
    {
        id: "5",
        title: "Logistic Efficiency: The West-Link Expansion",
        description: "NAHSAZ Express integrates real-time fleet telematics to reduce cross-border transit times by 30%.",
        date: "Feb 05, 2026",
        sector: "Logistics",
        category: "Milestone",
        image: "/images/logistics_center_1772059769112.png",
        slug: "west-link-logistics-expansion"
    }
];
