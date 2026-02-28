import {
    Building2,
    HardHat,
    Stethoscope,
    Zap,
    Sprout,
    Pickaxe,
    Truck,
    Car,
    Briefcase,
    LucideIcon
} from "lucide-react";

export interface Subsidiary {
    slug: string;
    name: string;
    description: string;
    longDescription?: string;
    features?: string[];
    stats?: { label: string; value: string }[];
    projects?: { name: string; year: string; location: string; image: string }[];
}

export interface Sector {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    secondaryColor: string;
    gradient: string;
    fullDescription: string;
    subsidiaries: Subsidiary[];
}

export const sectors: Sector[] = [
    {
        slug: "real-estate",
        title: "Real Estate & Infrastructure",
        description: "Architecting the future through precision development and sustainable urban planning.",
        icon: Building2,
        color: "#C5A059",
        secondaryColor: "#1B2D3D",
        gradient: "from-gold/10 to-transparent",
        fullDescription: "NAHSAZ Group's Real Estate division is a dominant force in West African urban transformation. We specialize in high-yield residential estates, Grade-A commercial hubs, and strategic land banking, all underpinned by sustainable architectural standards and smart-city technologies.",
        subsidiaries: [
            {
                slug: "nahsaz-properties",
                name: "NAHSAZ Properties Ltd",
                description: "Luxury residential development and institutional facility management.",
                longDescription: "Redefining the standard of premium living, NAHSAZ Properties Ltd delivers vertically integrated residential solutions. Our portfolio includes gated eco-estates and luxury high-rises that combine state-of-the-art security with sustainable environmental design.",
                features: ["Smart City Integration", "Carbon-Neutral Infrastructure", "Biometric Security Ecosystems", "Institutional Property Management"],
                stats: [{ label: "Capital Deployed", value: "$450M+" }, { label: "Asset Value", value: "$1.2B+" }],
                projects: [
                    { name: "The Platinum Heights", year: "2024", location: "Maitama Extension, Abuja", image: "/images/platinum_heights_1772059769112.png" },
                    { name: "Emerald Gardens II", year: "2023", location: "Lekki Phase I, Lagos", image: "/images/emerald_gardens_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "agriculture",
        title: "Agriculture & Agribusiness",
        description: "Securing national food sovereignty through mechanized precision and innovation.",
        icon: Sprout,
        color: "#27AE60",
        secondaryColor: "#1B5E20",
        gradient: "from-green-500/10 to-transparent",
        fullDescription: "Our agricultural mandate focuses on the large-scale industrialization of the Nigerian farming landscape. Through mechanized crop production, livestock optimization, and integrated processing hubs, we are closing the gap in the national food value chain.",
        subsidiaries: [
            {
                slug: "greenfield-agro",
                name: "GreenField Agro",
                description: "Mechanized industrial farming and precision livestock genetics.",
                longDescription: "GreenField Agro operates massive industrial farming clusters utilizing satellite-guided machinery and AI-driven irrigation. Our focus is on staple crop production and high-value export commodities, supported by advanced seed research labs.",
                features: ["Satellite-Guided Cultivation", "Industrial Storage Hubs", "Precision Livestock Genetics", "Cross-Border Commodity Trade"],
                stats: [{ label: "Arable Land", value: "25k Hec" }, { label: "Processing Power", value: "500t/day" }],
                projects: [
                    { name: "The Northern Ag-Tech Hub", year: "2023", location: "Nasarawa/Kaduna Corridor", image: "/images/agtech_hub_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "energy",
        title: "Energy & Renewables",
        description: "Powering industrial growth with base-load reliability and sustainable solar mandates.",
        icon: Zap,
        color: "#F1C40F",
        secondaryColor: "#3E2723",
        gradient: "from-yellow-500/10 to-transparent",
        fullDescription: "Addressing the critical energy deficit through direct investment in off-grid solar farms and industrial power infrastructure. We are building the energy backbone required for Nigeria's 21st-century industrial revolution.",
        subsidiaries: [
            {
                slug: "solara-renewables",
                name: "Solara Renewables",
                description: "Large-scale utility solar and industrial micro-grid solutions.",
                longDescription: "Solara Renewables is engineering the transition to clean energy. We develop and operate utility-scale solar arrays that provide consistent power to industrial zones and underserved rural SMEs, significantly reducing the national reliance on fossil fuels.",
                features: ["Utility-Scale Solar Farms", "Industrial Energy Storage", "Micro-Grid Operation", "Renewable Energy Certificates"],
                stats: [{ label: "Generated Power", value: "75MW" }, { label: "SMEs Powered", value: "15,000+" }],
                projects: [
                    { name: "Kano Industrial Solar Array", year: "2024", location: "Kumbotso, Kano State", image: "/images/kano_solar_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "healthcare",
        title: "Healthcare & Life Sciences",
        description: "Advancing precision medicine through ISO-certified diagnostics and biomedical research.",
        icon: Stethoscope,
        color: "#16A085",
        secondaryColor: "#00332B",
        gradient: "from-emerald-500/10 to-transparent",
        fullDescription: "Dedicated to institutionalizing excellence in Nigerian healthcare. Our life sciences division operates high-fidelity diagnostic networks and pharmaceutical supply chains that meet stringent international clinical standards.",
        subsidiaries: [
            {
                slug: "nahsaz-medical-diagnostics",
                name: "NAHSAZ Medical Diagnostics",
                description: "Advanced clinical diagnostics and AI-enhanced medical imaging.",
                longDescription: "Operating the most technologically advanced diagnostic network in the region, we provide AI-driven pathology and molecular testing services. Our labs are ISO 15189 certified, ensuring global-standard diagnostic accuracy for Nigerian patients.",
                features: ["AI-Driven Radiography", "Molecular Pathology", "Tele-Medicine Backbone", "Fully Automated Labs"],
                stats: [{ label: "Diagnostic Accuracy", value: "99.9%" }, { label: "Network Capacity", value: "5k/day" }],
                projects: [
                    { name: "Enugu Regional Diagnostics Hub", year: "2024", location: "Enugu, Nigeria", image: "/images/diagnostic_hub_1772059769112.png" }
                ]
            }
        ]
    }
];
