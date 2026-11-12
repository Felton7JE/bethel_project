import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gatherings } from './components/Gatherings';
import { BranchesSection } from './components/BranchesSection';
import { CellsSection } from './components/CellsSection';
import { FormationSection } from './components/FormationSection';
import { MissionImpact } from './components/MissionImpact';
import { MessagesAndLeadership } from './components/MessagesAndLeadership';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#16181A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Gatherings />
        <BranchesSection />
        <CellsSection />
        <FormationSection />
        <MissionImpact />
        <MessagesAndLeadership />
      </main>
      <Footer />
    </div>
  );
}

export default App;
