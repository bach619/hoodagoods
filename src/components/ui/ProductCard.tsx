import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, ExternalLink } from 'lucide-react';
import { Product } from '../../types';
import AffiliateDisclosure from './AffiliateDisclosure';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

// Helper function to format price with thousands separator
const formatPrice = (price: number): string => {
  return price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  return (
    <div 
      className={`card group min-h-[500px] flex flex-col ${
        featured ? 'border-2 border-accent-400' : ''
      }`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden pt-[75%]">
        {featured && (
          <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 flex items-center z-10">
            <Award className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">Top Pick</span>
          </div>
        )}
        <Link to={`/review/${product.slug}`} className="block absolute inset-0">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      {/* Product Content */}
      <div className="flex-grow p-4 flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-accent-500 fill-accent-500' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
        </div>
        
        <Link to={`/review/${product.slug}`} className="block mb-2 hover:text-primary-600">
          <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{product.description}</p>
        
        {/* Price */}
        <div className="mb-3">
          <span className="font-semibold text-lg">${formatPrice(product.price)}</span>
        </div>
        
        {/* Category - positioned consistently above buttons */}
        <div className="mb-4">
          <span className="badge-primary">{product.category}</span>
        </div>
      </div>
      
      {/* CTA Buttons - Fixed position at bottom */}
      <div className="px-4 space-y-2 pb-2">
        <Link 
          to={`/review/${product.slug}`} 
          className="btn-outline w-full text-center"
        >
          Read Review
        </Link>
        
        <a 
          href={product.affiliateUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="affiliate-link w-full text-center group"
        >
          View Price
          <ExternalLink className="ml-1 h-4 w-4 inline transform transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      
      {/* Affiliate disclosure */}
      <div className="px-4 pb-4">
        <AffiliateDisclosure />
      </div>
    </div>
  );
};

export default ProductCard;