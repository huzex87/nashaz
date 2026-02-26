import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers & Human Capital | NAHSAZ Group",
    description: "Explore career opportunities across the NAHSAZ Group. Join a world-class conglomerate powering Nigeria's infrastructure, tech, and economy.",
    openGraph: {
        title: "Careers & Human Capital | NAHSAZ Group",
        description: "Explore career opportunities across the NAHSAZ Group.",
        url: "https://nashazgroup.com/careers",
    },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
