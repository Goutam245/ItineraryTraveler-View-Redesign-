import { useState } from 'react';
import { 
  Plane, Bed, Ticket, Utensils, Compass, 
  Clock, MapPin, ChevronDown, FileText, Lightbulb,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Stop } from '@/data/itineraryData';

interface StopCardProps {
  stop: Stop;
}

const typeConfig = {
  flight: {
    icon: Plane,
    gradient: 'bg-gradient-to-br from-coral to-pink-400',
    badge: 'bg-coral/10 text-coral border-coral/20',
  },
  hotel: {
    icon: Bed,
    gradient: 'bg-gradient-to-br from-plum to-purple-400',
    badge: 'bg-plum/10 text-plum border-plum/20',
  },
  attraction: {
    icon: Ticket,
    gradient: 'bg-gradient-to-br from-sky to-teal-400',
    badge: 'bg-sky/10 text-sky border-sky/20',
  },
  restaurant: {
    icon: Utensils,
    gradient: 'bg-gradient-to-br from-gold to-coral',
    badge: 'bg-gold/10 text-gold border-gold/20',
  },
  freetime: {
    icon: Compass,
    gradient: 'bg-gradient-to-br from-sage to-emerald-400',
    badge: 'bg-sage/10 text-sage border-sage/20',
  },
};

const StopCard = ({ stop }: StopCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const config = typeConfig[stop.type];
  const Icon = config.icon;

  return (
    <div className="bg-card rounded-lg sm:rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
      {/* Header */}
      <div className={cn("p-3 sm:p-4 flex items-center justify-between gap-3", config.gradient)}>
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-ivory/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-ivory" />
          </div>
          <div className="min-w-0">
            <Badge className={cn("border text-[10px] sm:text-xs font-medium mb-0.5 sm:mb-1", config.badge, "bg-ivory/90")}>
              {stop.type.charAt(0).toUpperCase() + stop.type.slice(1)}
            </Badge>
            <h3 className="text-ivory font-semibold leading-tight text-sm sm:text-base truncate">{stop.title}</h3>
          </div>
        </div>
        <div className="text-right text-ivory/90 flex-shrink-0">
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{stop.time}</span>
          </div>
          {stop.duration && (
            <span className="text-[10px] sm:text-xs text-ivory/70">{stop.duration}</span>
          )}
        </div>
      </div>
      
      {/* Image */}
      {stop.image && (
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={stop.image} 
            alt={stop.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          {stop.rating && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center gap-1 bg-midnight/80 backdrop-blur-sm text-ivory px-2 py-1 rounded-lg text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-gold" />
              <span>{stop.rating}</span>
            </div>
          )}
        </div>
      )}
      
      {/* Details Grid */}
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
          {stop.details.map((detail, index) => (
            <div key={index} className="flex flex-col items-center text-center p-1.5 sm:p-2 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground text-[10px] sm:text-xs mb-0.5 sm:mb-1">{detail.label}</span>
              <span className="font-medium text-foreground text-xs sm:text-sm">{detail.value}</span>
            </div>
          ))}
        </div>
        
        {/* Location */}
        {stop.location && (
          <div className="mt-2 sm:mt-3 flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">{stop.location}</span>
          </div>
        )}
        
        {/* Expandable Section */}
        {(stop.documents || stop.tips) && (
          <>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors w-full touch-manipulation"
            >
              <ChevronDown className={cn("w-4 h-4 transition-transform", showDetails && "rotate-180")} />
              <span>{showDetails ? 'Hide details' : 'View details'}</span>
            </button>
            
            <div className={cn(
              "overflow-hidden transition-all duration-300",
              showDetails ? "max-h-96 opacity-100 mt-2 sm:mt-3" : "max-h-0 opacity-0"
            )}>
              {/* Documents */}
              {stop.documents && stop.documents.length > 0 && (
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Documents</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stop.documents.map((doc, index) => (
                      <a 
                        key={index}
                        href={doc.url}
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors flex items-center gap-1.5 sm:gap-2"
                      >
                        <FileText className="w-3 h-3" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tips */}
              {stop.tips && (
                <div className="p-2 sm:p-3 bg-gold/10 border border-gold/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-gold mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-foreground">{stop.tips}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StopCard;
