import { useState } from 'react';
import { ChevronDown, MapPin, Sun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import StopCard from './StopCard';
import type { Day } from '@/data/itineraryData';

interface DayCardProps {
  day: Day;
  isActive?: boolean;
  animationDelay?: number;
}

const DayCard = ({ day, isActive = false, animationDelay = 0 }: DayCardProps) => {
  const [isExpanded, setIsExpanded] = useState(isActive);

  const statusColors = {
    current: 'bg-coral text-primary-foreground',
    upcoming: 'bg-accent text-accent-foreground',
    completed: 'bg-muted text-muted-foreground',
  };

  return (
    <article 
      className={cn(
        "group bg-card rounded-xl sm:rounded-2xl shadow-soft overflow-hidden transition-all duration-300 card-lift",
        "border-l-4",
        day.status === 'current' ? 'border-l-coral' : day.status === 'completed' ? 'border-l-sage' : 'border-l-gold'
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Header */}
      <div 
        className="p-4 sm:p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <Badge className={cn("font-semibold text-xs sm:text-sm", statusColors[day.status])}>
                Day {day.dayNumber}
              </Badge>
              {day.status === 'current' && (
                <Badge className="bg-coral/10 text-coral border border-coral/20 animate-pulse-soft text-xs">
                  NOW
                </Badge>
              )}
            </div>
            
            <h2 className="text-lg sm:text-h3 text-foreground mb-1 truncate">{day.title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="truncate">{day.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
              <span>{day.stops.length} stops</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Weather Widget */}
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
              <Sun className="w-4 h-4 text-gold" />
              <span className="text-sm">{day.weather}</span>
            </div>
            
            <ChevronDown 
              className={cn(
                "w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition-transform duration-300",
                isExpanded && "rotate-180"
              )} 
            />
          </div>
        </div>
        
        {/* Day Image */}
        <div className="relative mt-3 sm:mt-4 rounded-lg sm:rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]">
          <img 
            src={day.image} 
            alt={day.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 text-ivory">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium text-sm sm:text-base">{day.location}</span>
          </div>
          
          {/* Mobile Weather */}
          <div className="absolute top-3 right-3 flex sm:hidden items-center gap-1 bg-midnight/70 backdrop-blur-sm px-2 py-1 rounded-full">
            <Sun className="w-3 h-3 text-gold" />
            <span className="text-xs text-ivory">{day.weather}</span>
          </div>
        </div>
        
        {/* Route Preview - Horizontal scroll on mobile */}
        <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto scrollbar-hide pb-1">
          {day.stops.slice(0, 4).map((stop, index) => (
            <div key={stop.id} className="flex items-center gap-2 flex-shrink-0">
              <span className="px-2 py-1 bg-muted/50 rounded-md whitespace-nowrap">{stop.title.split(' ').slice(0, 2).join(' ')}</span>
              {index < Math.min(day.stops.length - 1, 3) && (
                <span className="text-gold">→</span>
              )}
            </div>
          ))}
          {day.stops.length > 4 && (
            <span className="text-muted-foreground whitespace-nowrap">+{day.stops.length - 4} more</span>
          )}
        </div>
      </div>
      
      {/* Expandable Timeline */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
          <div className="h-px bg-border" />
          
          {/* Timeline */}
          <div className="relative pl-6 sm:pl-8">
            {/* Timeline Line */}
            <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-coral to-sage" />
            
            {/* Stops */}
            <div className="space-y-4 sm:space-y-6">
              {day.stops.map((stop, index) => (
                <div key={stop.id} className="relative animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 sm:-left-5 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-card border-4 border-gold" />
                  
                  <StopCard stop={stop} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DayCard;
