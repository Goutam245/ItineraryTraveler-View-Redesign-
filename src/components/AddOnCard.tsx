import { Star, Clock, MapPin, Flame, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { AddOn } from '@/data/itineraryData';

interface AddOnCardProps {
  addon: AddOn;
  onAdd: (id: string) => void;
  isAdded?: boolean;
}

const AddOnCard = ({ addon, onAdd, isAdded = false }: AddOnCardProps) => {
  return (
    <article className="group bg-card rounded-xl sm:rounded-2xl shadow-soft overflow-hidden border border-gold/20 hover:shadow-lifted hover:border-gold/40 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
      {/* Image */}
      <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden">
        <img 
          src={addon.image} 
          alt={addon.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
        
        {/* Limited Badge */}
        {addon.spotsLeft && addon.spotsLeft <= 5 && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <Badge className="bg-coral text-ivory border-0 animate-pulse-soft text-xs sm:text-sm">
              <Flame className="w-3 h-3 mr-1" />
              Only {addon.spotsLeft} Spots Left
            </Badge>
          </div>
        )}
        
        {/* Rating */}
        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-1 bg-midnight/80 backdrop-blur-sm text-ivory px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-gold" />
          <span className="font-medium text-sm">{addon.rating}</span>
          <span className="text-ivory/70 text-xs sm:text-sm">({addon.reviewCount})</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-xl sm:text-2xl">✨</span>
          <h3 className="text-base sm:text-h3 text-foreground leading-tight font-semibold">{addon.title}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-2">{addon.description}</p>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{addon.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{addon.location}</span>
          </div>
          <Badge variant="outline" className="border-sage/30 text-sage text-xs">
            Day {addon.dayNumber}
          </Badge>
        </div>
        
        {/* Pricing */}
        <div className="flex flex-wrap items-end gap-2 mb-3 sm:mb-4">
          <span className="text-muted-foreground line-through text-base sm:text-lg">${addon.originalPrice}</span>
          <span className="text-xl sm:text-2xl font-bold text-foreground">${addon.price}</span>
          <Badge className="bg-sage/10 text-sage border border-sage/20 text-xs ml-auto">
            Save ${addon.originalPrice - addon.price}
          </Badge>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button 
            onClick={() => onAdd(addon.id)}
            className={
              isAdded 
                ? "flex-1 bg-sage text-ivory" 
                : "flex-1 bg-gradient-to-r from-gold to-coral text-midnight hover:shadow-glow"
            }
            size="default"
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Added
              </>
            ) : (
              'Add to Trip'
            )}
          </Button>
          <Button variant="outline" className="border-border hover:bg-muted flex-1 sm:flex-none" size="default">
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default AddOnCard;
