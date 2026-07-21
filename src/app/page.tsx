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

        <div className="relative z-20 rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden -mt-8">
          <Sectors />
        </div>

        <div className="relative z-30 bg-warm-platinum rounded-t-[3rem] sm:rounded-t-[4rem] -mt-8">
          <MissionVision />

          <ContactCTA />
        </div>
      </div>
    </main>
  );
}
