export interface ServiceItem {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export const businessInfo = {
  name: 'Jackfinn Craftsman',
  email: 'Quinnwilliams177@gmail.com',
  phone: '8436945221',
  phoneDisplay: '(843) 694-5221',
  facebook: 'https://www.facebook.com/quinn.williams.399488/',
  location: 'Serving homeowners with detail-driven renovation and finish work.',
};

export const services: ServiceItem[] = [
  {
    title: 'Kitchen & Bath Renovation',
    description:
      'Thoughtful upgrades that improve everyday function while delivering a clean, durable finish that feels custom to the home.',
  },
  {
    title: 'Trim, Finish Carpentry & Millwork',
    description:
      'Crisp lines, precise fit, and refined finishing details that elevate interiors and showcase the value of true craftsmanship.',
  },
  {
    title: 'Flooring, Tile & Interior Refreshes',
    description:
      'Well-executed surface updates that strengthen the character of a room and stand up to daily use.',
  },
  {
    title: 'Repairs, Upgrades & Punch-List Work',
    description:
      'Reliable completion of the smaller details that keep a home polished, protected, and ready to enjoy.',
  },
];

export const craftsmanshipPoints: FeatureItem[] = [
  {
    title: 'Built with care',
    description:
      'Every project is approached with a craftsman mindset: clean execution, honest materials, and attention to finish quality.',
  },
  {
    title: 'Clear communication',
    description:
      'Homeowners get straightforward updates, dependable scheduling, and a process designed to reduce stress from start to finish.',
  },
  {
    title: 'Results that last',
    description:
      'The focus is not just appearance. Each renovation is completed with durability, usability, and long-term value in mind.',
  },
];

export const stats = [
  { value: 'Detail-Driven', label: 'Craftsmanship on every finish' },
  { value: 'Clean Process', label: 'Organized, respectful job sites' },
  { value: 'Trusted Service', label: 'Friendly, professional communication' },
];
