import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NAHSAZ Group",
    description: "Discover the history, vision, and core values of the NAHSAZ Group. Explore our legacy of powering commerce and delivering industrial solutions across Nigeria.",
    openGraph: {
        title: "About Us | NAHSAZ Group",
        description: "Discover the history, vision, and core values of the NAHSAZ Group.",
        url: "https://nashazgroup.com/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
