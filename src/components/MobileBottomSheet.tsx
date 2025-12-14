import { useState } from 'react';
import { ChevronUp, Sliders, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CustomizationSidebar from './CustomizationSidebar';

const MobileBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating CTA - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-gradient-to-t from-background via-background to-transparent pt-6 pb-4 px-4">
        <div className="flex gap-3">
          <Button 
            onClick={() => setIsOpen(true)}
            variant="outline" 
            className="flex-1 bg-card border-border shadow-medium h-12"
          >
            <Sliders className="w-4 h-4 mr-2" />
            Customize
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-gold to-coral text-midnight font-semibold shadow-medium h-12"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>
      </div>

      {/* Bottom Sheet Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-midnight/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Bottom Sheet Content */}
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Handle */}
        <div 
          className="flex justify-center py-3 bg-card rounded-t-2xl cursor-grab"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
        
        <CustomizationSidebar onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default MobileBottomSheet;
