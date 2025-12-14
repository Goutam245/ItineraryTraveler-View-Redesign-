export interface Stop {
  id: string;
  type: 'flight' | 'hotel' | 'attraction' | 'restaurant' | 'freetime';
  title: string;
  time: string;
  duration?: string;
  location?: string;
  image?: string;
  rating?: number;
  details: { label: string; value: string }[];
  documents?: { name: string; url: string }[];
  tips?: string;
}

export interface Day {
  dayNumber: number;
  title: string;
  date: string;
  location: string;
  image: string;
  weather: string;
  status: 'current' | 'upcoming' | 'completed';
  stops: Stop[];
}

export interface AddOn {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  duration: string;
  location: string;
  dayNumber: number;
  rating: number;
  reviewCount: number;
  spotsLeft?: number;
}

export interface FlightOption {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: number;
  price: number;
  class: 'economy' | 'business';
  amenities?: string[];
}

export interface HotelTier {
  id: string;
  name: string;
  stars: number;
  rating: number;
  priceAddon: number;
  recommended?: boolean;
}

export const days: Day[] = [
  {
    dayNumber: 1,
    title: 'Welcome to Rome',
    date: 'Tuesday, July 15',
    location: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80',
    weather: '28°C Sunny',
    status: 'current',
    stops: [
      {
        id: 'day1-flight',
        type: 'flight',
        title: 'Arrival at Rome Fiumicino Airport',
        time: '11:30 AM',
        duration: '3h 30m flight',
        location: 'FCO - Leonardo da Vinci Airport',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        details: [
          { label: 'Flight', value: 'EL AL LY383' },
          { label: 'Terminal', value: 'Terminal 3' },
          { label: 'Gate', value: 'A12' },
        ],
        documents: [
          { name: 'E-Ticket', url: '#' },
          { name: 'Boarding Pass', url: '#' },
        ],
        tips: 'Pro tip: Use the Leonardo Express train for a quick 32-minute ride to Roma Termini station.',
      },
      {
        id: 'day1-hotel',
        type: 'hotel',
        title: 'Check-in at Hotel de Russie',
        time: '2:00 PM',
        location: 'Via del Babuino, 9, Rome',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        rating: 4.9,
        details: [
          { label: 'Room', value: 'Deluxe Garden' },
          { label: 'View', value: 'Garden View' },
          { label: 'Floor', value: '3rd Floor' },
        ],
        tips: 'Request the secret garden terrace suite upgrade - often available for a small fee.',
      },
      {
        id: 'day1-colosseum',
        type: 'attraction',
        title: 'Skip-the-Line Colosseum Tour',
        time: '4:00 PM',
        duration: '2.5 hours',
        location: 'Piazza del Colosseo, 1',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
        rating: 4.8,
        details: [
          { label: 'Guide', value: 'Expert English' },
          { label: 'Group Size', value: 'Max 12' },
          { label: 'Includes', value: 'Underground' },
        ],
        documents: [
          { name: 'Tour Voucher', url: '#' },
        ],
        tips: 'Wear comfortable shoes - you\'ll be walking on ancient Roman stone floors.',
      },
      {
        id: 'day1-dinner',
        type: 'restaurant',
        title: 'Dinner at Trattoria da Enzo',
        time: '8:00 PM',
        duration: '2 hours',
        location: 'Via dei Vascellari, 29, Trastevere',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        rating: 4.7,
        details: [
          { label: 'Cuisine', value: 'Roman' },
          { label: 'Reservation', value: 'Confirmed' },
          { label: 'Table', value: 'Garden' },
        ],
        tips: 'Must try: Cacio e Pepe and the house tiramisu. Best sunset view from Gianicolo Hill, 10-min walk.',
      },
    ],
  },
  {
    dayNumber: 2,
    title: 'Vatican & Renaissance Art',
    date: 'Wednesday, July 16',
    location: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=80',
    weather: '30°C Sunny',
    status: 'upcoming',
    stops: [
      {
        id: 'day2-vatican',
        type: 'attraction',
        title: 'Vatican Museums & Sistine Chapel',
        time: '8:00 AM',
        duration: '4 hours',
        location: 'Vatican City',
        image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
        rating: 4.9,
        details: [
          { label: 'Entry', value: 'Early Access' },
          { label: 'Guide', value: 'Art Historian' },
          { label: 'Includes', value: 'St. Peter\'s' },
        ],
        tips: 'Dress code enforced: Cover shoulders and knees. Bring a light scarf.',
      },
      {
        id: 'day2-lunch',
        type: 'restaurant',
        title: 'Lunch at Bonci Pizzarium',
        time: '1:00 PM',
        location: 'Via della Meloria, 43',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        rating: 4.6,
        details: [
          { label: 'Style', value: 'Pizza al Taglio' },
          { label: 'Type', value: 'Casual' },
          { label: 'Wait', value: '~15 min' },
        ],
        tips: 'Gabriele Bonci is the Michelangelo of pizza. Try the potato and fig varieties.',
      },
      {
        id: 'day2-freetime',
        type: 'freetime',
        title: 'Explore Trastevere',
        time: '3:00 PM',
        duration: '3 hours',
        location: 'Trastevere District',
        image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80',
        details: [
          { label: 'Vibe', value: 'Bohemian' },
          { label: 'Activity', value: 'Self-Guided' },
          { label: 'Distance', value: '2 km walk' },
        ],
        tips: 'Visit Santa Maria in Trastevere for stunning 12th-century mosaics. Get gelato at Fatamorgana.',
      },
    ],
  },
  {
    dayNumber: 3,
    title: 'Journey to Florence',
    date: 'Thursday, July 17',
    location: 'Florence, Italy',
    image: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=1200&q=80',
    weather: '27°C Partly Cloudy',
    status: 'upcoming',
    stops: [
      {
        id: 'day3-train',
        type: 'flight',
        title: 'High-Speed Train to Florence',
        time: '9:30 AM',
        duration: '1h 30m',
        location: 'Roma Termini → Firenze SMN',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
        details: [
          { label: 'Train', value: 'Frecciarossa' },
          { label: 'Class', value: 'Business' },
          { label: 'Car', value: '7, Seat 42' },
        ],
        documents: [
          { name: 'Train Ticket', url: '#' },
        ],
      },
      {
        id: 'day3-hotel',
        type: 'hotel',
        title: 'Check-in at Portrait Firenze',
        time: '12:00 PM',
        location: 'Lungarno Acciaiuoli, 4',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
        rating: 4.9,
        details: [
          { label: 'Suite', value: 'River View' },
          { label: 'Style', value: 'Boutique' },
          { label: 'Brand', value: 'Ferragamo' },
        ],
        tips: 'The rooftop terrace has the best Ponte Vecchio view in Florence. Complimentary aperitivo at sunset.',
      },
      {
        id: 'day3-uffizi',
        type: 'attraction',
        title: 'Uffizi Gallery Private Tour',
        time: '3:00 PM',
        duration: '3 hours',
        location: 'Piazzale degli Uffizi, 6',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80',
        rating: 4.9,
        details: [
          { label: 'Tour', value: 'Private' },
          { label: 'Guide', value: 'Art Expert' },
          { label: 'Highlights', value: 'Botticelli' },
        ],
        tips: 'Focus on the Botticelli room - The Birth of Venus in person is life-changing.',
      },
    ],
  },
];

export const addOns: AddOn[] = [
  {
    id: 'wine-tour',
    title: 'Tuscan Wine & Cooking Experience',
    description: 'Learn pasta-making in a 15th-century villa with a Michelin-trained chef. Includes wine tasting from three estate vineyards.',
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=800&q=80',
    price: 95,
    originalPrice: 140,
    discount: 32,
    duration: '3 hours',
    location: 'Florence',
    dayNumber: 2,
    rating: 4.9,
    reviewCount: 234,
    spotsLeft: 3,
  },
  {
    id: 'vespa-tour',
    title: 'Vintage Vespa Tour of Tuscany',
    description: 'Cruise the Chianti hills on a classic Italian Vespa. Stop at hidden villages, olive groves, and a family-owned winery.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    price: 120,
    originalPrice: 165,
    discount: 27,
    duration: '4 hours',
    location: 'Chianti',
    dayNumber: 3,
    rating: 4.8,
    reviewCount: 189,
    spotsLeft: 5,
  },
  {
    id: 'sunset-sail',
    title: 'Amalfi Sunset Sailing Experience',
    description: 'Private catamaran cruise along the stunning Amalfi coastline. Includes champagne, local antipasti, and swimming stops.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    price: 180,
    originalPrice: 250,
    discount: 28,
    duration: '5 hours',
    location: 'Amalfi Coast',
    dayNumber: 6,
    rating: 5.0,
    reviewCount: 156,
  },
];

export const flightOptions: FlightOption[] = [
  {
    id: 'elal-383',
    airline: 'El Al',
    flightNumber: 'LY383',
    departure: '08:00',
    arrival: '11:30',
    duration: '3h 30m',
    stops: 0,
    price: 520,
    class: 'economy',
  },
  {
    id: 'lufthansa-456',
    airline: 'Lufthansa',
    flightNumber: 'LH456',
    departure: '06:30',
    arrival: '14:35',
    duration: '8h 05m',
    stops: 1,
    price: 450,
    class: 'economy',
    amenities: ['Via Munich', 'USB Power', 'Entertainment'],
  },
  {
    id: 'elal-385',
    airline: 'El Al',
    flightNumber: 'LY385',
    departure: '10:00',
    arrival: '13:30',
    duration: '3h 30m',
    stops: 0,
    price: 1820,
    class: 'business',
    amenities: ['Lie-flat Seat', 'Priority Boarding', 'Lounge Access', 'Gourmet Dining', 'Wifi'],
  },
];

export const hotelTiers: HotelTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    stars: 3,
    rating: 4.2,
    priceAddon: 0,
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    stars: 4,
    rating: 4.7,
    priceAddon: 200,
    recommended: true,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    stars: 5,
    rating: 4.9,
    priceAddon: 450,
  },
];
