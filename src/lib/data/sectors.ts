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
        title: "Real Estate",
        description: "Developing premium residential and commercial properties with modern architectural standards.",
        icon: Building2,
        color: "#C5A059",
        secondaryColor: "#050C16",
        gradient: "from-gold/10 to-transparent",
        fullDescription: "NAHSAZ Group's Real Estate division is at the forefront of urban development in Nigeria. We focus on creating high-value assets and iconic architectural landmarks that redefine modern living and commercial excellence.",
        subsidiaries: [
            {
                slug: "nahsaz-properties",
                name: "NAHSAZ Properties Ltd",
                description: "Premium residential estate development and management.",
                longDescription: "NAHSAZ Properties Ltd is dedicated to delivering world-class residential solutions that combine luxury with functionality. Our estates are designed with sustainable infrastructure and modern amenities to provide an unparalleled living experience.",
                features: ["Smart Home Integration", "Sustainable Eco-Design", "24/7 Premium Security", "Managed Facilities"],
                stats: [{ label: "Estates Delivered", value: "12+" }, { label: "Happy Homeowners", value: "500+" }],
                projects: [
                    { name: "The Platinum Heights", year: "2024", location: "Maitama, Abuja", image: "/images/platinum_heights_1772059769112.png" },
                    { name: "Emerald Gardens", year: "2023", location: "Lekki, Lagos", image: "/images/emerald_gardens_1772059769112.png" }
                ]
            },
            {
                slug: "skyline-ventures",
                name: "Skyline Ventures",
                description: "Commercial property leasing and strategic land acquisitions.",
                longDescription: "Skyline Ventures specializes in the development and management of high-end commercial spaces. We provide strategic locations for businesses to thrive, offering flexible leasing options and state-of-the-art office environments.",
                features: ["Prime Business Locations", "Flexible Lease Terms", "Industrial Grade Infrastructure", "Strategic Land Bank"],
                stats: [{ label: "Commercial Space", value: "250k sqft" }, { label: "Corporate Clients", value: "45+" }],
                projects: [
                    { name: "NAHSAZ Corporate Tower", year: "2024", location: "Central Business District, Abuja", image: "/images/corporate_tower_1772059769112.png" },
                    { name: "The Bridge Mall", year: "2022", location: "Asokoro, Abuja", image: "/images/bridge_mall_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "construction",
        title: "Construction",
        description: "Delivering high-quality infrastructure solutions, from residential complexes to industrial facilities.",
        icon: HardHat,
        color: "#E67E22",
        secondaryColor: "#2C3E50",
        gradient: "from-orange-500/10 to-transparent",
        fullDescription: "Our construction arm is synonymous with durability and precision. We handle complex civil engineering projects, high-rise buildings, and industrial plants with a focus on safety and international quality standards.",
        subsidiaries: [
            {
                slug: "nahsaz-civil-infra",
                name: "NAHSAZ Civil & Infra",
                description: "Large-scale road, bridge, and industrial construction.",
                longDescription: "NAHSAZ Civil & Infra is a leader in heavy construction and civil engineering. We specialize in building the infrastructure that powers Nigeria's growth, including national highways, bridges, and industrial estates.",
                features: ["Heavy Engineering", "Bridge Construction", "Road Infrastructure", "Industrial Zoning"],
                stats: [{ label: "Roads Built", value: "450km" }, { label: "Major Bridges", value: "8" }],
                projects: [
                    { name: "The Niger Link Bridge", year: "2023", location: "Delta State", image: "/images/niger_bridge_1772059769112.png" },
                    { name: "Federal Highway 12 Expansion", year: "2024", location: "Kaduna-Kano", image: "/images/highway_12_1772059769112.png" }
                ]
            },
            {
                slug: "elite-structures",
                name: "Elite Structures",
                description: "Specialized high-end residential and commercial building construction.",
                longDescription: "Elite Structures focuses on the more intricate aspects of vertical construction. From luxury skyscrapers to boutique commercial hubs, we bring precision and architectural excellence to every project.",
                features: ["High-Rise Expertise", "Architectural Concrete", "Structural Integrity", "Fast-Track Delivery"],
                stats: [{ label: "Skyscrapers", value: "5" }, { label: "Safety Record", value: "100%" }],
                projects: [
                    { name: "The Penthouse Regency", year: "2024", location: "Victoria Island, Lagos", image: "/images/penthouse_regency_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "healthcare",
        title: "Healthcare",
        description: "Providing integrated healthcare solutions and improving medical service accessibility.",
        icon: Stethoscope,
        color: "#16A085",
        secondaryColor: "#00332B",
        gradient: "from-emerald-500/10 to-transparent",
        fullDescription: "Dedicated to improving the health outcomes of all Nigerians, our healthcare division integrates advanced medical technology with compassionate care and community-focused pharmaceutical supply chains.",
        subsidiaries: [
            {
                slug: "nahsaz-medical-diagnostics",
                name: "NAHSAZ Medical Diagnostics",
                description: "State-of-the-art laboratory and diagnostic imaging services.",
                longDescription: "Providing the most accurate diagnostic data in West Africa, our medical diagnostics wing utilizes AI-driven imaging and fully automated labs to ensure timely and precise medical insights.",
                features: ["AI Radiography", "Molecular Testing", "Tele-health Integration", "ISO Certified Labs"],
                stats: [{ label: "Patients Served", value: "1M+" }, { label: "Accuracy Rate", value: "99.9%" }],
                projects: [
                    { name: "Regional Diagnostic Hub", year: "2024", location: "Enugu State", image: "/images/diagnostic_hub_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "energy",
        title: "Energy",
        description: "Investing in sustainable energy solutions to power Nigerian industries and communities.",
        icon: Zap,
        color: "#F1C40F",
        secondaryColor: "#3E2723",
        gradient: "from-yellow-500/10 to-transparent",
        fullDescription: "Addressing the nation's energy challenges through a blend of traditional power solutions and a progressive shift towards renewable energy, ensuring consistent power for the economy.",
        subsidiaries: [
            {
                slug: "solara-renewables",
                name: "Solara Renewables",
                description: "Solar farm development and off-grid community energy solutions.",
                longDescription: "Solara Renewables is on a mission to electrify Nigeria using the power of the sun. We develop large-scale solar farms and micro-grids that bring sustainable energy to rural and urban communities alike.",
                features: ["Solar Farm Operations", "Mini-Grid Solutions", "Energy Storage Systems", "Carbon Credit Trading"],
                stats: [{ label: "Clean Energy", value: "50MW" }, { label: "Homes Powered", value: "15k" }],
                projects: [
                    { name: "Kano Solar Array", year: "2024", location: "Kano State", image: "/images/kano_solar_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "agriculture",
        title: "Agriculture",
        description: "Enhancing food security through modern farming practices and agribusiness trade.",
        icon: Sprout,
        color: "#27AE60",
        secondaryColor: "#1B5E20",
        gradient: "from-green-500/10 to-transparent",
        fullDescription: "Our agricultural division leverages technology to maximize yield and ensure food security. We are involved in the entire value chain from mechanized farming to large-scale processing.",
        subsidiaries: [
            {
                slug: "greenfield-agro",
                name: "GreenField Agro",
                description: "Mechanized crop production and livestock management.",
                longDescription: "GreenField Agro is at the forefront of mechanized farming in Nigeria. We operate vast tracts of land using precision agriculture techniques to ensure high yields and sustainable food production.",
                features: ["Precision Farming", "Mechanized Harvesting", "Livestock Optimization", "Seed Research"],
                stats: [{ label: "Cultivated Land", value: "20k Hec" }, { label: "Export Grade", value: "95%" }],
                projects: [
                    { name: "The Ag-Tech Hub", year: "2023", location: "Nasarawa State", image: "/images/agtech_hub_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "mining",
        title: "Mining",
        description: "Responsible extraction of mineral resources to drive industrial development.",
        icon: Pickaxe,
        color: "#7F8C8D",
        secondaryColor: "#2C3E50",
        gradient: "from-stone-500/10 to-transparent",
        fullDescription: "Operating with deep respect for the environment and social responsibility, we extract essential minerals that serve as the bedrock for industrialization and infrastructure.",
        subsidiaries: [
            {
                slug: "nahsaz-resources",
                name: "NAHSAZ Resources",
                description: "Responsible extraction of solid minerals and rare earth metals.",
                longDescription: "NAHSAZ Resources manages large-scale mining operations with a focus on lithium and gold. We employ best-in-class extraction technologies and rigorous environmental reclamation standards.",
                features: ["Lithium Extraction", "Environmental Reclamation", "Community Mining Hubs", "Mineral Logistics"],
                stats: [{ label: "Active Mines", value: "4" }, { label: "Community Jobs", value: "2k+" }],
                projects: [
                    { name: "Lithium Valley Phase I", year: "2024", location: "Kogi State", image: "/images/lithium_valley_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "logistics",
        title: "Logistics",
        description: "Efficient transportation and supply chain management for seamless commerce.",
        icon: Truck,
        color: "#2980B9",
        secondaryColor: "#1A237E",
        gradient: "from-blue-500/10 to-transparent",
        fullDescription: "Ensuring the pulse of commerce never stops, our logistics wing provides world-class supply chain solutions, connecting manufacturers to markets with speed and transparency.",
        subsidiaries: [
            {
                slug: "nahsaz-express",
                name: "NAHSAZ Express",
                description: "Last-mile delivery and interstate haulage solutions.",
                longDescription: "NAHSAZ Express is the fast-moving heart of our logistics network. We provide reliable delivery services across Nigeria, powered by a modern fleet and real-time tracking technology.",
                features: ["Smart Fleet Management", "Cold Chain Logistics", "E-commerce Integration", "State-wide Coverage"],
                stats: [{ label: "Deliveries/Day", value: "10k+" }, { label: "Reliability", value: "99.2%" }],
                projects: [
                    { name: "West-Link Logistics Center", year: "2024", location: "Ogun State", image: "/images/logistics_center_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "automotive",
        title: "Automotive",
        description: "Modern automotive solutions supporting transportation needs across various sectors.",
        icon: Car,
        color: "#34495E",
        secondaryColor: "#17202A",
        gradient: "from-slate-500/10 to-transparent",
        fullDescription: "We provide modern mobility solutions through dealership networks and specialized maintenance services for commercial and industrial vehicle fleets.",
        subsidiaries: [
            {
                slug: "nahsaz-motors",
                name: "NAHSAZ Motors",
                description: "Sales of luxury, commercial, and industrial vehicles.",
                longDescription: "NAHSAZ Motors represents multiple global brands in Nigeria, offering everything from heavy-duty industrial trucks to luxury passenger vehicles, backed by comprehensive warranties.",
                features: ["After-Sales Support", "Warranty Protection", "Financing Partners", "Genuine Parts Only"],
                stats: [{ label: "Units Sold", value: "5k+" }, { label: "Service Centers", value: "12" }],
                projects: [
                    { name: "NAHSAZ Flagship Showroom", year: "2024", location: "Abuja", image: "/images/showroom_1772059769112.png" }
                ]
            }
        ]
    },
    {
        slug: "consulting",
        title: "Consulting",
        description: "Professional expertise and strategic guidance for businesses and institutions.",
        icon: Briefcase,
        color: "#8E44AD",
        secondaryColor: "#4A235A",
        gradient: "from-purple-500/10 to-transparent",
        fullDescription: "Sharing our deep institutional knowledge to help other businesses navigate the complex Nigerian market, providing strategic insights and operational excellence advisory.",
        subsidiaries: [
            {
                slug: "nahsaz-advisory",
                name: "NAHSAZ Advisory",
                description: "Strategic business consulting and market entry strategy.",
                longDescription: "NAHSAZ Advisory helps foreign and domestic investors navigate the Nigerian regulatory and economic landscape, providing data-driven entry strategies and risk assessments.",
                features: ["Market Entry Strategy", "Regulatory Compliance", "Risk Management", "Business Intelligence"],
                stats: [{ label: "Projects Completed", value: "120+" }, { label: "Client ROI", value: "220%" }],
                projects: [
                    { name: "Global Trade Partnership", year: "2024", location: "International", image: "/images/consulting_1772059769112.png" }
                ]
            }
        ]
    }
];
