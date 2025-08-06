import EmailSection from '@/app/components/EmailSection';
import HeroSection from '@/app/components/HeroSection';
import ProjectSection from '@/app/components/ProjectSection';
import AboutSection from '@/app/components/AboutSection';
import Navbar from '@/app/components/Navbar';
import Roadmap from '@/app/components/Roadmap';
import TokenomicSection from '@/app/components/TokenomicSection';
import DexScreenerSection from '@/app/components/DexScreenerSection';

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <Navbar />
      <div>
        <HeroSection />
        <TokenomicSection />
        <AboutSection />
        <Roadmap />
        <DexScreenerSection
          contractAddress='0xf374ed71e8922077cf8300d4a1fedadaace11093'
          blockchain='abstract'
          title='Token Analytics'
          description='Real-time token analytics and trading data from DEX Screener'
        />
        {/* <ProjectSection />
        <EmailSection /> */}
      </div>
    </main>
  );
};

export default Home;
