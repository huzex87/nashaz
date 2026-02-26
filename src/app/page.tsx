import Hero from "@/components/home/Hero";
import CEOMessage from "@/components/home/CEOMessage";
import Sectors from "@/components/home/Sectors";
import MissionVision from "@/components/home/MissionVision";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy selection:bg-gold selection:text-navy">
      {/* Scrollable Content Container */}
      <div className="relative">
        <Hero />

        <div id="about" className="relative z-10 bg-white rounded-t-[4rem] -mt-16">
          <CEOMessage />
        </div>

        <Sectors />

        <MissionVision />

        <ContactCTA />
      </div>
    </main>
  );
}
