import React, { useState } from 'react';
import { TrendingUp, Filter } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import CategoryFilter, { FilterState, DEFAULT_FILTERS } from '../components/ui/CategoryFilter';
import { TRENDING_PRODUCTS } from '../data/products';
import { Product } from '../types';

const TrendingProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(TRENDING_PRODUCTS);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [filtersActive, setFiltersActive] = useState<boolean>(false);

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    setFiltersActive(true);
    
    let result = [...TRENDING_PRODUCTS];
    
    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= newFilters.priceRange[0] &&
        product.price <= newFilters.priceRange[1]
    );
    
    // Filter by ratings
    if (newFilters.ratings.length > 0) {
      result = result.filter((product) =>
        newFilters.ratings.some((rating) => product.rating >= rating)
      );
    }
    
    // Filter by brands
    if (newFilters.brands.length > 0) {
      result = result.filter((product) =>
        newFilters.brands.includes(product.name.split(' ')[0])
      );
    }
    
    // Sort products
    switch (newFilters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    setFilteredProducts(result);
  };

  const handleResetFilters = (resetFilters: FilterState) => {
    setFilters(resetFilters);
    setFiltersActive(false);
    setFilteredProducts(TRENDING_PRODUCTS);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold">Trending Products</h1>
          </div>
          <p className="text-xl max-w-2xl text-accent-100">
            Discover the hottest products that everyone is talking about right now.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="flex gap-8">
          {/* Sidebar Filter */}
          <div className="w-[336px] flex-shrink-0 sticky top-24 self-start">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-primary-600" />
                Filter
              </h3>
              <CategoryFilter
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
              />
            </div>
          </div>

          {/* Products Area */}
          <div className="flex-grow">
            {/* Summary */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Trending Products
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {TRENDING_PRODUCTS.length} trending products
                  {filtersActive && (
                    <span className="ml-2 text-primary-600 font-medium">
                      (filtered)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductsPage;