export interface JobListing {
    id: string;
    title: string;
    sector: string;
    location: string;
    type: "Full-Time" | "Contract" | "Executive";
    description: string;
    requirements: string[];
    slug: string;
}

export const jobs: JobListing[] = [
    {
        id: "1",
        title: "Senior Project Manager (Real Estate)",
        sector: "Real Estate",
        location: "Abuja",
        type: "Full-Time",
        description: "Leading high-fidelity residential developments and ensuring zero-compromise quality standards across multiple sites.",
        requirements: ["10+ years in Real Estate Project Management", "PMP Certification", "Experience with luxury developments"],
        slug: "senior-project-manager-real-estate"
    },
    {
        id: "2",
        title: "Head of AgTech Innovation",
        sector: "Agriculture",
        location: "Kaduna / Remote",
        type: "Executive",
        description: "Driving the digital transformation of our agricultural operations through precision farming and automated irrigation systems.",
        requirements: ["Master's in Agronomy or Tech", "Proven track record in AgTech", "Strategic leadership experience"],
        slug: "head-of-agtech-innovation"
    },
    {
        id: "3",
        title: "Logistics Operations Lead",
        sector: "Logistics",
        location: "Lagos / Port Harcourt",
        type: "Full-Time",
        description: "Optimizing supply chain efficiency and managing our growing fleet of heavy-duty transport vehicles.",
        requirements: ["BSc in Supply Chain Management", "5+ years in Logistics Ops", "Fleet management proficiency"],
        slug: "logistics-operations-lead"
    },
    {
        id: "4",
        title: "Chief Medical Officer",
        sector: "Healthcare",
        location: "Abuja",
        type: "Executive",
        description: "Defining clinical excellence and overseeing the medical operations of our diagnostic hubs and specialty clinics.",
        requirements: ["MD with Specialist Qualification", "15+ years clinical experience", "Healthcare administration expertise"],
        slug: "chief-medical-officer"
    }
];
