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
    projects?: { name: string; year: string; location: string; image?: string }[];
}

export interface Sector {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    secondaryColor: string;
    gradient: string;
    /** Short positioning line shown on the sector hero. */
    tagline: string;
    fullDescription: string;
    /** Bespoke "Performance Track" figures rendered on the sector page. */
    stats: { label: string; value: string }[];
    /** Sector-specific market-focus tags. */
    marketFocus: string[];
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
        tagline: "Building the landmarks of a modern Nigeria.",
        fullDescription: "NAHSAZ Group's Real Estate division is a dominant force in West African urban transformation. We specialize in high-yield residential estates, Grade-A commercial hubs, and strategic land banking, all underpinned by sustainable architectural standards and smart-city technologies.",
        stats: [
            { label: "Capital Deployed", value: "$450M+" },
            { label: "Delivery On Time", value: "98%" },
            { label: "Managed Assets", value: "$1.2B+" },
        ],
        marketFocus: ["Luxury Residential", "Grade-A Commercial", "Smart Cities", "Land Banking"],
        subsidiaries: [
            {
                slug: "nahsaz-properties",
                name: "NAHSAZ Properties Ltd",
                description: "Luxury residential development and institutional facility management.",
                longDescription: "Redefining the standard of premium living, NAHSAZ Properties Ltd delivers vertically integrated residential solutions. Our portfolio includes gated eco-estates and luxury high-rises that combine state-of-the-art security with sustainable environmental design.",
                features: ["Smart City Integration", "Carbon-Neutral Infrastructure", "Biometric Security Ecosystems", "Institutional Property Management"],
                stats: [{ label: "Capital Deployed", value: "$450M+" }, { label: "Asset Value", value: "$1.2B+" }],
                projects: [
                    { name: "The Platinum Heights", year: "2024", location: "Maitama Extension, Abuja" },
                    { name: "Emerald Gardens II", year: "2023", location: "Lekki Phase I, Lagos" }
                ]
            }
        ]
    },
    {
        slug: "construction",
        title: "Construction & Engineering",
        description: "Delivering civil and structural works to the highest global engineering standards.",
        icon: HardHat,
        color: "#E07A2F",
        secondaryColor: "#2B1608",
        gradient: "from-orange-500/10 to-transparent",
        tagline: "Engineering the backbone of national growth.",
        fullDescription: "Our Construction & Engineering arm executes complex civil, structural, and industrial projects across Nigeria. From highways and bridges to industrial parks and public infrastructure, we combine modern methods of construction with rigorous safety governance to deliver on time and to specification.",
        stats: [
            { label: "Projects Delivered", value: "120+" },
            { label: "Safety Record", value: "Zero-LTI" },
            { label: "On-Budget Rate", value: "96%" },
        ],
        marketFocus: ["Civil Works", "Industrial Facilities", "Public Infrastructure", "Design-Build"],
        subsidiaries: [
            {
                slug: "nahsaz-construction",
                name: "NAHSAZ Construction Ltd",
                description: "Heavy civil, structural, and industrial construction delivery.",
                longDescription: "NAHSAZ Construction Ltd is a full-service EPC contractor delivering roads, bridges, industrial plants, and institutional buildings. We deploy modern methods of construction, BIM-driven planning, and an uncompromising safety culture to complete landmark projects that stand the test of time.",
                features: ["EPC Project Delivery", "BIM-Driven Planning", "Modern Methods of Construction", "HSE Governance"],
                stats: [{ label: "Projects Delivered", value: "120+" }, { label: "Workforce", value: "3,500+" }],
                projects: [
                    { name: "Kaduna Ring Road Phase II", year: "2024", location: "Kaduna State" },
                    { name: "Central Industrial Park", year: "2023", location: "Abuja" }
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
        tagline: "Raising the standard of care across the region.",
        fullDescription: "Dedicated to institutionalizing excellence in Nigerian healthcare. Our life sciences division operates high-fidelity diagnostic networks and pharmaceutical supply chains that meet stringent international clinical standards.",
        stats: [
            { label: "Diagnostic Accuracy", value: "99.9%" },
            { label: "Daily Capacity", value: "5k+" },
            { label: "ISO Certified", value: "15189" },
        ],
        marketFocus: ["Clinical Diagnostics", "Medical Imaging", "Tele-Medicine", "Pharma Supply"],
        subsidiaries: [
            {
                slug: "nahsaz-medical-diagnostics",
                name: "NAHSAZ Medical Diagnostics",
                description: "Advanced clinical diagnostics and AI-enhanced medical imaging.",
                longDescription: "Operating the most technologically advanced diagnostic network in the region, we provide AI-driven pathology and molecular testing services. Our labs are ISO 15189 certified, ensuring global-standard diagnostic accuracy for Nigerian patients.",
                features: ["AI-Driven Radiography", "Molecular Pathology", "Tele-Medicine Backbone", "Fully Automated Labs"],
                stats: [{ label: "Diagnostic Accuracy", value: "99.9%" }, { label: "Network Capacity", value: "5k/day" }],
                projects: [
                    { name: "Enugu Regional Diagnostics Hub", year: "2024", location: "Enugu, Nigeria" }
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
        tagline: "Fueling the 21st-century industrial revolution.",
        fullDescription: "Addressing the critical energy deficit through direct investment in off-grid solar farms and industrial power infrastructure. We are building the energy backbone required for Nigeria's 21st-century industrial revolution.",
        stats: [
            { label: "Generation", value: "75MW" },
            { label: "SMEs Powered", value: "15k+" },
            { label: "Uptime", value: "99.5%" },
        ],
        marketFocus: ["Utility Solar", "Industrial Power", "Micro-Grids", "Energy Storage"],
        subsidiaries: [
            {
                slug: "solara-renewables",
                name: "Solara Renewables",
                description: "Large-scale utility solar and industrial micro-grid solutions.",
                longDescription: "Solara Renewables is engineering the transition to clean energy. We develop and operate utility-scale solar arrays that provide consistent power to industrial zones and underserved rural SMEs, significantly reducing the national reliance on fossil fuels.",
                features: ["Utility-Scale Solar Farms", "Industrial Energy Storage", "Micro-Grid Operation", "Renewable Energy Certificates"],
                stats: [{ label: "Generated Power", value: "75MW" }, { label: "SMEs Powered", value: "15,000+" }],
                projects: [
                    { name: "Kano Industrial Solar Array", year: "2024", location: "Kumbotso, Kano State" }
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
        tagline: "Cultivating national food sovereignty.",
        fullDescription: "Our agricultural mandate focuses on the large-scale industrialization of the Nigerian farming landscape. Through mechanized crop production, livestock optimization, and integrated processing hubs, we are closing the gap in the national food value chain.",
        stats: [
            { label: "Arable Land", value: "25k Ha" },
            { label: "Processing", value: "500t/day" },
            { label: "Yield Uplift", value: "+40%" },
        ],
        marketFocus: ["Mechanized Farming", "Livestock Genetics", "Processing Hubs", "Export Trade"],
        subsidiaries: [
            {
                slug: "greenfield-agro",
                name: "GreenField Agro",
                description: "Mechanized industrial farming and precision livestock genetics.",
                longDescription: "GreenField Agro operates massive industrial farming clusters utilizing satellite-guided machinery and AI-driven irrigation. Our focus is on staple crop production and high-value export commodities, supported by advanced seed research labs.",
                features: ["Satellite-Guided Cultivation", "Industrial Storage Hubs", "Precision Livestock Genetics", "Cross-Border Commodity Trade"],
                stats: [{ label: "Arable Land", value: "25k Hec" }, { label: "Processing Power", value: "500t/day" }],
                projects: [
                    { name: "The Northern Ag-Tech Hub", year: "2023", location: "Nasarawa/Kaduna Corridor" }
                ]
            }
        ]
    },
    {
        slug: "mining",
        title: "Mining & Solid Minerals",
        description: "Responsibly unlocking Nigeria's mineral wealth with modern extraction technology.",
        icon: Pickaxe,
        color: "#B87333",
        secondaryColor: "#2A1A0E",
        gradient: "from-amber-700/10 to-transparent",
        tagline: "Unearthing value, responsibly.",
        fullDescription: "NAHSAZ Mining develops solid mineral assets across Nigeria's rich geological belt. Through responsible extraction, mineral processing, and beneficiation, we convert raw resources into high-value industrial inputs while upholding rigorous environmental and community standards.",
        stats: [
            { label: "Active Sites", value: "12" },
            { label: "Reserves", value: "40M MT" },
            { label: "Local Jobs", value: "2,800+" },
        ],
        marketFocus: ["Mineral Extraction", "Beneficiation", "Export Processing", "Community Impact"],
        subsidiaries: [
            {
                slug: "nahsaz-minerals",
                name: "NAHSAZ Minerals",
                description: "Solid mineral exploration, extraction, and beneficiation.",
                longDescription: "NAHSAZ Minerals operates modern, mechanized mining sites focused on high-demand industrial minerals. We integrate exploration, extraction, and on-site beneficiation to deliver processed, export-ready materials while maintaining leading environmental and community-development practices.",
                features: ["Geological Exploration", "Mechanized Extraction", "On-Site Beneficiation", "Environmental Restoration"],
                stats: [{ label: "Active Sites", value: "12" }, { label: "Estimated Reserves", value: "40M MT" }],
                projects: [
                    { name: "Plateau Beneficiation Plant", year: "2024", location: "Jos, Plateau State" }
                ]
            }
        ]
    },
    {
        slug: "logistics",
        title: "Logistics & Supply Chain",
        description: "Connecting markets with intelligent freight, warehousing, and last-mile delivery.",
        icon: Truck,
        color: "#2E86DE",
        secondaryColor: "#0B2A4A",
        gradient: "from-blue-500/10 to-transparent",
        tagline: "Moving the nation, one shipment at a time.",
        fullDescription: "Our Logistics & Supply Chain division is the connective tissue of the NAHSAZ ecosystem. We operate integrated freight, bonded warehousing, and technology-driven last-mile networks that keep goods moving efficiently across Nigeria and the wider West African corridor.",
        stats: [
            { label: "Fleet Size", value: "600+" },
            { label: "On-Time", value: "97%" },
            { label: "Warehousing", value: "180k m²" },
        ],
        marketFocus: ["Road Freight", "Bonded Warehousing", "Last-Mile", "Cross-Border"],
        subsidiaries: [
            {
                slug: "nahsaz-logistics",
                name: "NAHSAZ Logistics",
                description: "Integrated freight, warehousing, and last-mile distribution.",
                longDescription: "NAHSAZ Logistics delivers end-to-end supply-chain solutions powered by real-time fleet telematics and a national warehousing footprint. From heavy haulage to precision last-mile delivery, we optimize cost and speed for industrial and commercial clients.",
                features: ["Real-Time Fleet Telematics", "Bonded Warehousing", "Cold-Chain Capability", "West-Africa Corridor"],
                stats: [{ label: "Fleet Size", value: "600+" }, { label: "Warehousing", value: "180k m²" }],
                projects: [
                    { name: "Lagos Distribution Mega-Hub", year: "2024", location: "Ikeja, Lagos" }
                ]
            }
        ]
    },
    {
        slug: "automotive",
        title: "Automotive & Mobility",
        description: "Driving the future of mobility with assembly, distribution, and fleet solutions.",
        icon: Car,
        color: "#C0392B",
        secondaryColor: "#3A0F0A",
        gradient: "from-red-500/10 to-transparent",
        tagline: "Powering how Nigeria moves.",
        fullDescription: "NAHSAZ Automotive spans vehicle assembly, authorized distribution, and managed fleet services. We bring reliable, service-backed mobility to individuals, institutions, and industry, supported by a growing network of certified service centers nationwide.",
        stats: [
            { label: "Units Handled", value: "18k+" },
            { label: "Service Centers", value: "24" },
            { label: "Uptime SLA", value: "95%" },
        ],
        marketFocus: ["Vehicle Assembly", "Authorized Distribution", "Fleet Management", "After-Sales"],
        subsidiaries: [
            {
                slug: "nahsaz-motors",
                name: "NAHSAZ Motors",
                description: "Vehicle distribution, assembly, and managed fleet services.",
                longDescription: "NAHSAZ Motors provides end-to-end automotive solutions — from local assembly and authorized distribution to fully managed corporate fleets. Our certified service network guarantees maximum uptime and lifetime value for every vehicle we put on the road.",
                features: ["Local Assembly (CKD/SKD)", "Authorized Distribution", "Managed Corporate Fleets", "Certified After-Sales"],
                stats: [{ label: "Units Handled", value: "18k+" }, { label: "Service Centers", value: "24" }],
                projects: [
                    { name: "Abuja Assembly & Service Complex", year: "2023", location: "Idu Industrial Area, Abuja" }
                ]
            }
        ]
    },
    {
        slug: "consulting",
        title: "Consulting & Advisory",
        description: "Guiding institutions with strategy, capital advisory, and transformation expertise.",
        icon: Briefcase,
        color: "#6C5CE7",
        secondaryColor: "#1E1A3A",
        gradient: "from-indigo-500/10 to-transparent",
        tagline: "Strategy that moves institutions forward.",
        fullDescription: "The NAHSAZ Advisory practice partners with government agencies, corporates, and investors to unlock growth. We deliver strategy, capital advisory, and operational transformation grounded in deep sector knowledge across the group's diversified footprint.",
        stats: [
            { label: "Engagements", value: "90+" },
            { label: "Capital Advised", value: "$800M+" },
            { label: "Client Retention", value: "94%" },
        ],
        marketFocus: ["Corporate Strategy", "Capital Advisory", "Transformation", "Public Sector"],
        subsidiaries: [
            {
                slug: "nahsaz-advisory",
                name: "NAHSAZ Advisory",
                description: "Strategy, capital advisory, and operational transformation.",
                longDescription: "NAHSAZ Advisory brings institutional-grade consulting to the West African market. Combining strategy, transaction advisory, and hands-on transformation delivery, we help clients raise capital, enter new markets, and operate at global standards.",
                features: ["Corporate & Growth Strategy", "M&A and Capital Advisory", "Operating-Model Design", "Public-Sector Reform"],
                stats: [{ label: "Engagements", value: "90+" }, { label: "Capital Advised", value: "$800M+" }],
                projects: [
                    { name: "National SME Growth Program", year: "2024", location: "Federal Capital Territory" }
                ]
            }
        ]
    }
];
