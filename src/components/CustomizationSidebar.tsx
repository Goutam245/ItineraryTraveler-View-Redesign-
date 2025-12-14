import { useState } from 'react';
import { 
  Plane, Bed, Check, ChevronDown, Star, 
  Sparkles, CreditCard, ArrowRight, X 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { flightOptions, hotelTiers, type FlightOption, type HotelTier } from '@/data/itineraryData';

interface CustomizationSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const CustomizationSidebar = ({ isOpen = true, onClose }: CustomizationSidebarProps) => {
  const [selectedFlight, setSelectedFlight] = useState<string>('elal-385');
  const [selectedHotel, setSelectedHotel] = useState<string>('deluxe');
  const [expandedFlight, setExpandedFlight] = useState<string | null>(null);

  const calculateTotal = () => {
    const baseCost = 1999;
    const flight = flightOptions.find(f => f.id === selectedFlight);
    const hotel = hotelTiers.find(h => h.id === selectedHotel);
    const flightUpgrade = flight?.price ? flight.price - 520 : 0;
    const hotelUpgrade = hotel?.priceAddon || 0;
    return baseCost + flightUpgrade + hotelUpgrade;
  };

  const savings = 730;
  const total = calculateTotal();

  return (
    <aside className={cn(
      "bg-card rounded-xl sm:rounded-2xl shadow-soft border border-border overflow-hidden",
      "lg:block"
    )}>
      {/* Header */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-plum to-plum/80 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-ivory mb-1">Customize Your Trip</h2>
          <p className="text-ivory/70 text-xs sm:text-sm">Select your preferences below</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-2 text-ivory/70 hover:text-ivory">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 max-h-[60vh] lg:max-h-none overflow-y-auto">
        {/* Flight Selection */}
        <section>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-coral/10 flex items-center justify-center">
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Flight Options</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            {flightOptions.map((flight) => (
              <FlightOptionCard 
                key={flight.id}
                flight={flight}
                isSelected={selectedFlight === flight.id}
                isExpanded={expandedFlight === flight.id}
                onSelect={() => setSelectedFlight(flight.id)}
                onToggleExpand={() => setExpandedFlight(expandedFlight === flight.id ? null : flight.id)}
              />
            ))}
          </div>
        </section>

        {/* Hotel Selection */}
        <section>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-plum/10 flex items-center justify-center">
              <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-plum" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Hotel Tier</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            {hotelTiers.map((tier) => (
              <HotelTierCard 
                key={tier.id}
                tier={tier}
                isSelected={selectedHotel === tier.id}
                onSelect={() => setSelectedHotel(tier.id)}
              />
            ))}
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="pt-4 sm:pt-6 border-t border-border">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Pricing Summary</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base Package</span>
              <span className="font-medium">$1,999</span>
            </div>
            {selectedFlight !== 'elal-383' && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Flight Upgrade</span>
                <span className="font-medium">+${(flightOptions.find(f => f.id === selectedFlight)?.price || 520) - 520}</span>
              </div>
            )}
            {selectedHotel !== 'standard' && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hotel Upgrade</span>
                <span className="font-medium">+${hotelTiers.find(h => h.id === selectedHotel)?.priceAddon || 0}</span>
              </div>
            )}
            
            <div className="h-px bg-border my-2 sm:my-3" />
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${total + savings}</span>
            </div>
            <div className="flex justify-between items-center text-sage">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                You Save
              </span>
              <span className="font-medium">-${savings}</span>
            </div>
            
            <div className="h-px bg-border my-2 sm:my-3" />
            
            <div className="flex justify-between items-center text-base sm:text-lg">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-foreground">${total}</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <Button className="w-full bg-gradient-to-r from-gold to-coral text-midnight font-semibold hover:shadow-glow transition-all duration-300 h-10 sm:h-12 text-sm sm:text-base">
              Book Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="w-full border-border hover:bg-muted h-10 sm:h-12 text-sm sm:text-base">
              Save Changes
            </Button>
          </div>
        </section>
      </div>
    </aside>
  );
};

interface FlightOptionCardProps {
  flight: FlightOption;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: () => void;
  onToggleExpand: () => void;
}

const FlightOptionCard = ({ flight, isSelected, isExpanded, onSelect, onToggleExpand }: FlightOptionCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 cursor-pointer transition-all duration-300 touch-manipulation",
        isSelected 
          ? "border-gold bg-gold/5" 
          : "border-border hover:border-gold/50"
      )}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className={cn(
            "w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0",
            isSelected ? "border-gold bg-gold" : "border-muted-foreground"
          )}>
            {isSelected && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-midnight" />}
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="font-medium text-foreground text-sm sm:text-base">{flight.airline} {flight.flightNumber}</span>
              {flight.class === 'business' && (
                <Badge className="bg-gold/10 text-gold border border-gold/20 text-[10px] sm:text-xs">
                  Business
                </Badge>
              )}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {flight.departure} → {flight.arrival} • {flight.duration}
            </p>
            {flight.stops === 0 ? (
              <span className="text-[10px] sm:text-xs text-sage">Direct</span>
            ) : (
              <span className="text-[10px] sm:text-xs text-muted-foreground">{flight.stops} Stop</span>
            )}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="font-semibold text-foreground text-sm sm:text-base">${flight.price}</span>
        </div>
      </div>
      
      {flight.amenities && (
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleExpand(); }}
          className="mt-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
        >
          <ChevronDown className={cn("w-3 h-3 sm:w-4 sm:h-4 transition-transform", isExpanded && "rotate-180")} />
          View details
        </button>
      )}
      
      {isExpanded && flight.amenities && (
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border animate-fade-up">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {flight.amenities.map((amenity, i) => (
              <span key={i} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-muted rounded-md text-muted-foreground">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface HotelTierCardProps {
  tier: HotelTier;
  isSelected: boolean;
  onSelect: () => void;
}

const HotelTierCard = ({ tier, isSelected, onSelect }: HotelTierCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 cursor-pointer transition-all duration-300 touch-manipulation",
        isSelected 
          ? "border-gold bg-gold/5" 
          : "border-border hover:border-gold/50"
      )}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className={cn(
            "w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0",
            isSelected ? "border-gold bg-gold" : "border-muted-foreground"
          )}>
            {isSelected && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-midnight" />}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="font-medium text-foreground text-sm sm:text-base">{tier.name}</span>
              {tier.recommended && (
                <Badge className="bg-sage/10 text-sage border border-sage/20 text-[10px] sm:text-xs">
                  Recommended
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
              {Array.from({ length: tier.stars }).map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold fill-gold" />
              ))}
              <span className="text-[10px] sm:text-xs text-muted-foreground ml-1">{tier.rating}</span>
            </div>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          {tier.priceAddon === 0 ? (
            <span className="text-xs sm:text-sm text-sage font-medium">Included</span>
          ) : (
            <span className="font-semibold text-foreground text-sm sm:text-base">+${tier.priceAddon}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizationSidebar;
