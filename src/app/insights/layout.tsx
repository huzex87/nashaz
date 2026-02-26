import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligence Hub | NAHSAZ Group",
    description: "Read the latest corporate announcements, press releases, and sector-specific insights from the NAHSAZ Group.",
    openGraph: {
        title: "Intelligence Hub | NAHSAZ Group",
        description: "Read the latest corporate announcements, press releases, and sector-specific insights from the NAHSAZ Group.",
        url: "https://nashazgroup.com/insights",
    },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
