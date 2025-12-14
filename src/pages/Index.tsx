import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import DayCard from '@/components/DayCard';
import AddOnCard from '@/components/AddOnCard';
import CustomizationSidebar from '@/components/CustomizationSidebar';
import MobileBottomSheet from '@/components/MobileBottomSheet';
import { days, addOns } from '@/data/itineraryData';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [addedAddOns, setAddedAddOns] = useState<string[]>([]);

  const handleAddOn = (id: string) => {
    setAddedAddOns(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id) 
        : [...prev, id]
    );
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Italy Summer Tour 2025 | Luxury Italian Journey</title>
        <meta name="description" content="Experience an unforgettable 8-day luxury journey through Rome, Florence, and the Amalfi Coast. Curated experiences, premium accommodations, and authentic Italian culture." />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-32 lg:pb-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left: Itinerary */}
            <div className="flex-1 lg:max-w-[calc(100%-400px)] space-y-6 sm:space-y-8">
              {/* Section Header */}
              <div className="animate-fade-up">
                <h2 className="text-2xl sm:text-h1 text-foreground mb-1 sm:mb-2 font-display font-semibold">Your Journey</h2>
                <p className="text-muted-foreground text-sm sm:text-lg">8 days of unforgettable Italian experiences</p>
              </div>
              
              {/* Day Cards */}
              <div className="space-y-4 sm:space-y-6">
                {days.map((day, index) => (
                  <DayCard 
                    key={day.dayNumber} 
                    day={day} 
                    isActive={day.status === 'current'}
                    animationDelay={index * 100}
                  />
                ))}
              </div>
              
              {/* Add-Ons Section */}
              <section className="pt-6 sm:pt-8 animate-fade-up">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-gold to-coral flex items-center justify-center">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-midnight" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-h2 text-foreground font-display font-medium">Enhance Your Trip</h2>
                    <p className="text-muted-foreground text-xs sm:text-base">Exclusive experiences at special prices</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {addOns.map((addon) => (
                    <AddOnCard 
                      key={addon.id} 
                      addon={addon}
                      onAdd={handleAddOn}
                      isAdded={addedAddOns.includes(addon.id)}
                    />
                  ))}
                </div>
              </section>
            </div>
            
            {/* Right: Sidebar - Desktop Only */}
            <aside className="hidden lg:block lg:w-[380px] lg:sticky lg:top-8 lg:self-start">
              <CustomizationSidebar />
            </aside>
          </div>
        </div>
        
        {/* Mobile Bottom Sheet */}
        <MobileBottomSheet />
        
        {/* Footer */}
        <footer className="bg-midnight text-ivory py-8 sm:py-12 mt-8 sm:mt-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-1">
                  <span className="text-gold">Itinify</span> Travel
                </h3>
                <p className="text-ivory/70 text-sm">Curating unforgettable journeys since 2018</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-ivory/70 text-sm">
                <a href="#" className="hover:text-gold transition-colors">About</a>
                <a href="#" className="hover:text-gold transition-colors">Contact</a>
                <a href="#" className="hover:text-gold transition-colors">Privacy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms</a>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-ivory/10 text-center text-ivory/50 text-xs sm:text-sm">
              © 2025 Itinify Travel. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </HelmetProvider>
  );
};

export default Index;
