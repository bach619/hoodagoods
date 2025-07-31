import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

interface CategoryFilterProps {
  onApplyFilters: (filters: FilterState) => void;
  onResetFilters: (filters: FilterState) => void;
  activeCategory?: string;
}

export interface FilterState {
  priceRange: [number, number];
  ratings: number[];
  brands: string[];
  sortBy: 'popular' | 'price-low' | 'price-high' | 'rating';
}

export const DEFAULT_FILTERS: FilterState = {
  priceRange: [0, 1000],
  ratings: [],
  brands: [],
  sortBy: 'popular',
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  onApplyFilters,
  onResetFilters,
  activeCategory 
}) => {
  const [localFilters, setLocalFilters] = useState<FilterState>(DEFAULT_FILTERS);
  
  // Get brands from active category
  const categoryBrands = activeCategory
    ? CATEGORIES.find(cat => cat.slug === activeCategory)?.brands || []
    : [];
    
  // Reset filters when category changes
  useEffect(() => {
    setLocalFilters(DEFAULT_FILTERS);
  }, [activeCategory]);
    
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newPriceRange = [...localFilters.priceRange] as [number, number];
    newPriceRange[index] = newValue;
    
    // Ensure min <= max
    if (index === 0 && newValue > newPriceRange[1]) {
      newPriceRange[1] = newValue;
    } else if (index === 1 && newValue < newPriceRange[0]) {
      newPriceRange[0] = newValue;
    }
    
    setLocalFilters({ ...localFilters, priceRange: newPriceRange });
  };
  
  const handleRatingToggle = (rating: number) => {
    const newRatings = localFilters.ratings.includes(rating)
      ? localFilters.ratings.filter(r => r !== rating)
      : [...localFilters.ratings, rating];
    
    setLocalFilters({ ...localFilters, ratings: newRatings });
  };
  
  const handleBrandToggle = (brand: string) => {
    const newBrands = localFilters.brands.includes(brand)
      ? localFilters.brands.filter(b => b !== brand)
      : [...localFilters.brands, brand];
    
    setLocalFilters({ ...localFilters, brands: newBrands });
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalFilters({ 
      ...localFilters,
      sortBy: e.target.value as FilterState['sortBy'] 
    });
  };
  
  const handleApplyFilters = () => {
    onApplyFilters(localFilters);
  };
  
  const handleResetFilters = () => {
    setLocalFilters(DEFAULT_FILTERS);
    onResetFilters(DEFAULT_FILTERS);
  };
  
  const hasActiveFilters = () => {
    return (
      localFilters.priceRange[0] !== DEFAULT_FILTERS.priceRange[0] ||
      localFilters.priceRange[1] !== DEFAULT_FILTERS.priceRange[1] ||
      localFilters.ratings.length > 0 ||
      localFilters.brands.length > 0 ||
      localFilters.sortBy !== DEFAULT_FILTERS.sortBy
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Reset Button */}
      {hasActiveFilters() && (
        <div className="flex justify-end">
          <button
            onClick={handleResetFilters}
            className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Reset All
          </button>
        </div>
      )}
      
      {/* Price Range */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-900">Price Range</h4>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Minimum ($)</label>
            <input
              type="number"
              min="0"
              value={localFilters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Maximum ($)</label>
            <input
              type="number"
              min="0"
              value={localFilters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      {/* Rating Filter */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-900">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={localFilters.ratings.includes(rating)}
                onChange={() => handleRatingToggle(rating)}
                className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{rating}+ Stars</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Brands */}
      {categoryBrands.length > 0 && (
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Brands</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categoryBrands.map(brand => (
              <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input
                  type="checkbox"
                  checked={localFilters.brands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}
      
      {/* Sort By */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-900">Sort By</h4>
        <select
          value={localFilters.sortBy}
          onChange={handleSortChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
        >
          <option value="popular">Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
      
      {/* Apply Filters Button */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={handleApplyFilters}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;