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
    name: string;
    description: string;
}

export interface Sector {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    fullDescription: string;
    subsidiaries: Subsidiary[];
}

export const sectors: Sector[] = [
    {
        slug: "real-estate",
        title: "Real Estate",
        description: "Developing premium residential and commercial properties with modern architectural standards.",
        icon: Building2,
        gradient: "from-blue-500/10 to-transparent",
        fullDescription: "NAHSAZ Group's Real Estate division is at the forefront of urban development in Nigeria. We focus on creating high-value assets and iconic architectural landmarks that redefine modern living and commercial excellence.",
        subsidiaries: [
            { name: "NAHSAZ Properties Ltd", description: "Premium residential estate development and management." },
            { name: "Skyline Ventures", description: "Commercial property leasing and strategic land acquisitions." }
        ]
    },
    {
        slug: "construction",
        title: "Construction",
        description: "Delivering high-quality infrastructure solutions, from residential complexes to industrial facilities.",
        icon: HardHat,
        gradient: "from-orange-500/10 to-transparent",
        fullDescription: "Our construction arm is synonymous with durability and precision. We handle complex civil engineering projects, high-rise buildings, and industrial plants with a focus on safety and international quality standards.",
        subsidiaries: [
            { name: "NAHSAZ Civil & Infra", description: "Large-scale road, bridge, and industrial construction." },
            { name: "Elite Structures", description: "Specialized high-end residential and commercial building construction." }
        ]
    },
    {
        slug: "healthcare",
        title: "Healthcare",
        description: "Providing integrated healthcare solutions and improving medical service accessibility.",
        icon: Stethoscope,
        gradient: "from-red-500/10 to-transparent",
        fullDescription: "Dedicated to improving the health outcomes of all Nigerians, our healthcare division integrates advanced medical technology with compassionate care and community-focused pharmaceutical supply chains.",
        subsidiaries: [
            { name: "NAHSAZ Medical Diagnostics", description: "State-of-the-art laboratory and diagnostic imaging services." },
            { name: "Vital Health Pharma", description: "Pharmaceutical distribution and primary care clinic management." }
        ]
    },
    {
        slug: "energy",
        title: "Energy",
        description: "Investing in sustainable energy solutions to power Nigerian industries and communities.",
        icon: Zap,
        gradient: "from-yellow-500/10 to-transparent",
        fullDescription: "Addressing the nation's energy challenges through a blend of traditional power solutions and a progressive shift towards renewable energy, ensuring consistent power for the economy.",
        subsidiaries: [
            { name: "NAHSAZ Power & Utilities", description: "Grid support services and industrial power plant management." },
            { name: "Solara Renewables", description: "Solar farm development and off-grid community energy solutions." }
        ]
    },
    {
        slug: "agriculture",
        title: "Agriculture",
        description: "Enhancing food security through modern farming practices and agribusiness trade.",
        icon: Sprout,
        gradient: "from-green-500/10 to-transparent",
        fullDescription: "Our agricultural division leverages technology to maximize yield and ensure food security. We are involved in the entire value chain from mechanized farming to large-scale processing.",
        subsidiaries: [
            { name: "GreenField Agro", description: "Mechanized crop production and livestock management." },
            { name: "NAHSAZ Agritrade", description: "Export-import of agricultural commodities and supply chain logistics." }
        ]
    },
    {
        slug: "mining",
        title: "Mining",
        description: "Responsible extraction of mineral resources to drive industrial development.",
        icon: Pickaxe,
        gradient: "from-stone-500/10 to-transparent",
        fullDescription: "Operating with deep respect for the environment and social responsibility, we extract essential minerals that serve as the bedrock for industrialization and infrastructure.",
        subsidiaries: [
            { name: "NAHSAZ Resources", description: "Responsible extraction of solid minerals and rare earth metals." },
            { name: "Apex Ores", description: "Mineral processing and industrial-grade material supply." }
        ]
    },
    {
        slug: "logistics",
        title: "Logistics",
        description: "Efficient transportation and supply chain management for seamless commerce.",
        icon: Truck,
        gradient: "from-indigo-500/10 to-transparent",
        fullDescription: "Ensuring the pulse of commerce never stops, our logistics wing provides world-class supply chain solutions, connecting manufacturers to markets with speed and transparency.",
        subsidiaries: [
            { name: "NAHSAZ Express", description: "Last-mile delivery and interstate haulage solutions." },
            { name: "Portside Logistics", description: "Freight forwarding, warehousing, and customs brokerage." }
        ]
    },
    {
        slug: "automotive",
        title: "Automotive",
        description: "Modern automotive solutions supporting transportation needs across various sectors.",
        icon: Car,
        gradient: "from-gray-500/10 to-transparent",
        fullDescription: "We provide modern mobility solutions through dealership networks and specialized maintenance services for commercial and industrial vehicle fleets.",
        subsidiaries: [
            { name: "NAHSAZ Motors", description: "Sales of luxury, commercial, and industrial vehicles." },
            { name: "AutoCare Hub", description: "State-of-the-art vehicle maintenance and spare parts distribution." }
        ]
    },
    {
        slug: "consulting",
        title: "Consulting",
        description: "Professional expertise and strategic guidance for businesses and institutions.",
        icon: Briefcase,
        gradient: "from-purple-500/10 to-transparent",
        fullDescription: "Sharing our deep institutional knowledge to help other businesses navigate the complex Nigerian market, providing strategic insights and operational excellence advisory.",
        subsidiaries: [
            { name: "NAHSAZ Advisory", description: "Strategic business consulting and market entry strategy." },
            { name: "Evolve Talent", description: "Human capital development and corporate training services." }
        ]
    },
];
