import { MapPin, Calendar, Users, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] lg:min-h-[500px] overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[kenBurns_20s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-6 sm:pb-8 lg:pb-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl animate-fade-up">
          {/* Live Status Badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge className="bg-coral/90 border-0 text-primary-foreground px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium animate-pulse-soft">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary-foreground mr-1.5 sm:mr-2 inline-block animate-pulse" />
              Day 1 • Currently in Rome
            </Badge>
            <Badge variant="outline" className="border-ivory/30 text-ivory/90 backdrop-blur-sm text-xs sm:text-sm">
              July 15-22, 2025
            </Badge>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-display font-display font-bold text-ivory mb-3 sm:mb-4 leading-tight">
            Italy Summer Tour
            <span className="block text-gold">2025</span>
          </h1>
          
          {/* Subtitle - Hidden on very small screens */}
          <p className="text-base sm:text-lg lg:text-xl text-ivory/80 mb-4 sm:mb-6 lg:mb-8 max-w-xl leading-relaxed hidden xs:block">
            An unforgettable 8-day journey through Rome, Florence, and the Amalfi Coast.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-ivory/90 text-sm sm:text-base">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span>8 Days</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-ivory/90 text-sm sm:text-base">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span>3 Cities</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-ivory/90 text-sm sm:text-base hidden sm:flex">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span>12 Travelers</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-ivory/90 text-sm sm:text-base hidden sm:flex">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span>24 Experiences</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold to-coral text-midnight font-semibold px-6 sm:px-8 hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Book This Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ivory/40 text-ivory bg-ivory/10 hover:bg-ivory/20 backdrop-blur-sm font-medium w-full sm:w-auto"
            >
              View Full Itinerary
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Glass Card - Desktop Only */}
      <div className="absolute right-6 lg:right-12 bottom-12 hidden xl:block animate-fade-up stagger-2">
        <div className="glass-card rounded-2xl p-6 w-72 bg-ivory/10 backdrop-blur-xl border-ivory/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-ivory/70 text-sm">Trip Progress</span>
            <span className="text-gold font-semibold">Day 1 of 8</span>
          </div>
          <div className="w-full h-2 bg-ivory/20 rounded-full overflow-hidden">
            <div className="w-[12.5%] h-full bg-gradient-to-r from-gold to-coral rounded-full" />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-coral flex items-center justify-center">
              <MapPin className="w-5 h-5 text-midnight" />
            </div>
            <div>
              <p className="text-ivory font-medium">Next Stop</p>
              <p className="text-ivory/70 text-sm">Colosseum Tour at 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
