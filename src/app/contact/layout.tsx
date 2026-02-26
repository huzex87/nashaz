import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Strategic Contact | NAHSAZ Group",
    description: "Reach out to the NAHSAZ Group or individual subsidiaries for strategic partnerships, procurement, services, and corporate inquiries.",
    openGraph: {
        title: "Strategic Contact | NAHSAZ Group",
        description: "Reach out to the NAHSAZ Group or individual subsidiaries for strategic partnerships, procurement, services, and corporate inquiries.",
        url: "https://nashazgroup.com/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
