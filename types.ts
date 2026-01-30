export interface Product {
  id: string;
  title: string;
  description: string;
  price: number | string;
  oldPrice?: number;
  currency: string;
  ctaLink: string;
  ctaText: string;
  badge?: string; // e.g. "NEW", "HOT"
  category: 'book' | 'service' | 'course' | 'business';
}

export interface Review {
  id: string;
  author?: string;
  text: string;
  context?: string; // e.g., "Consultation", "Book Reader"
}

export interface GuideSection {
  id: string;
  title: string;
  icon: string; // icon name
  description: string;
  items: string[];
}

export enum Tab {
  WELCOME = 'WELCOME',
  SHOP = 'SHOP',
  REVIEWS = 'REVIEWS',
  GUIDE = 'GUIDE',
  CART = 'CART',
}
