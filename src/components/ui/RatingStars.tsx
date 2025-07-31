import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
  showValue?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({ 
  rating, 
  size = 5, 
  showValue = true 
}) => {
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-${size} w-${size} ${
            i < Math.floor(rating) 
              ? 'text-accent-500 fill-accent-500' 
              : 'text-gray-300'
          }`} 
        />
      ))}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      )}
    </div>
  );
};

export default RatingStars;