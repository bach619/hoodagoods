export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  slug: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  features: Record<string, any>;
  specifications: Record<string, string>;
  content?: string;
  benefits?: string[];
  detailedReview?: {
    introduction: string;
    keyFeatures: string;
    performance: string;
    valueForMoney: string;
    whoShouldBuy: string;
    conclusion: string;
  };
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  brands: string[];
}

export interface UserComment {
  id: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
}